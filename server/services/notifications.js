import Notif from "../models/Notification";
import User from "../models/User";

import { Forbidden, NotFound, Unauthorized } from "../utils/Errors";

export const auth = (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  return next();
};

export const authToAlter = async (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  const n = await Notif.findById(req.params.id);

  if (!n) {
    throw new NotFound();
  }

  if (req.session.user.id !== n.to) {
    throw new Forbidden();
  }

  req.n = n;
  return next();
};

export const createNotif = async (req, res, next) => {
  const { from, to, type, post = "" } = req.body;
  try {
    const n = new Notif({
      from,
      to,
      type,
      post
    });

    await n.save();
    const u = await User.findById(from);

    n.author = u;
    return res.json(n);
  } catch (err) {
    return next(err);
  }
};

export const getAllNotif = async (req, res) => {
  const perPage = 10;
  const { page = 0 } = req.query;

  const notifs = await Notif.find({ to: req.session.user.id })
    .sort({ createdAt: -1 })
    .populate("from")
    .skip(parseInt(page) * perPage)
    .limit(perPage)
    .exec();

  const count = await Notif.countDocuments({
    to: req.session.user.id,
    read: false,
  });

  return res.json({ notifs, count });
};

export const changeNotif = async (req, res) => {
  req.n.read = true;

  req.n.save();

  return res.json(req.n);
};

export const deleteNotif = async (req, res) => {
  await Notif.findByIdAndRemove(req.params.id);
  return res.send("deleted");
};
