import Message from "../models/Message";

import { Unauthorized, Forbidden, NotFound } from "../utils/Errors";

export const auth = async (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  return next();
};

export const getMessages = async (req, res) => {
  const { page = 0, user } = req.query;
  const perPage = 20;

  const messages = await Message.find({
    from: { $in: [req.session.user.id, user] },
    to: { $in: [req.session.user.id, user] },
  })
    .sort({ createdAt: -1 })
    .skip(parseInt(page) * perPage)
    .limit(perPage)
    .exec();

  return res.json(messages);
};

export const addMessage = async(req,res) => {
  const message = new Message(req.body);

  await message.save();

  return res.json(message);
}

export const authToAlter = async(req,res,next) => {
  const t1 = Date.now();
  if (!req.session.user) {
    throw new Unauthorized();
  }

  const message = await Message.findById(req.params.id);

  if(!message) {
    throw new NotFound();
  }

  if(req.method === "PATCH" && req.session.user.id !== message.to) {
    throw new Forbidden();
  }

  if(req.method === "DELETE" && req.session.user.id !== message.from) {
    throw new Forbidden();
  }

  req.message = message;
  const t2 = Date.now();
  console.log(`performance authToAlter ${t2-t1}`);
  return next();
}

export const changeMessage = async(req,res) => {
  const t1 = Date.now();
  req.message.read = true;

  await req.message.save();

  const t2 = Date.now();
  console.log(`performance changeMessage ${t2-t1}`);

  return res.json(req.message);
}

export const removeMessage = async(req,res) => {
  await Message.findByIdAndDelete(req.message.id);
  return res.send("ok");
}

export const countMessages = async(req,res) => {
  const {user} = req.query;

  const count = await Message.countDocuments({
    from: user,
    to: req.session.user.id,
    read: false
  });

  return res.json({count});
}