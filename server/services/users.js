import User from "../models/User";
import Friends from "../models/Friends";
import Posts from "../models/Post";
import Notif from "../models/Notification";
import Comments from "../models/Comments";

import argon2 from "argon2";
import { BadRequest, Unauthorized, Forbidden, NotFound } from "../utils/Errors";
import { uploadAsync, getFileAsync, deleteFileAsync } from "../google-drive";
import { PassThrough } from "stream";

export const getAllUsers = async (req, res) => {
  const perPage = 5;
  const { page = 0, text = "" } = req.query;

  const regex = new RegExp(text, "i");
  const users = await User.find({ username: { $regex: regex } })
    .skip(parseInt(page) * perPage)
    .limit(perPage);

  return res.json(users);
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Missing username or password");
  }

  const user = await User.createUser({ username, password });
  return res.json(user);
};

export const authorize = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ $or: [{ _id: id }, { username: id }] });

  if (!user) {
    throw new NotFound();
  }

  req.user = user;

  if (req.method === "GET") {
    return next();
  }

  if (
    user.username !== req.session.user.username ||
    req.session.user.username !== "admin"
  ) {
    return new Forbidden();
  }

  return next();
};

export const getUser = async (req, res) => {
  return res.json(req.user);
};

export const changeUser = async (req, res, next) => {
  if (req.body.password) {
    req.body.password = await argon2.hash(req.body.password);
  }

  for (const key of Object.keys(req.body)) {
    req.user[key] = req.body[key];
  }

  await req.user.save();

  if (req.session.user.username !== "admin") {
    req.session.regenerate((err) => {
      if (err) {
        return next(err);
      }

      req.session.user = user.toJSON();
      return res.json(user);
    });
  }
  return res.json(req.user);
};

export const removeUser = async (req, res) => {
  await Friends.deleteOne({ user: req.user._id });
  const friends = await Friends.find({ friends: req.user._id });
  for (const friend of friends) {
    const index = friend.friends.findIndex((x) => x === req.user._id);
    friend.friends.splice(index, 1);
    await friend.save();
  }
  const posts = await Posts.find({ author: req.user._id });
  for (const post of posts) {
    await deleteFileAsync({ fileId: post._id });
  }
  await Posts.deleteMany({ author: req.user._id });
  await Notif.deleteMany({
    $or: [{ from: req.user._id }, { to: req.user._id }],
  });
  await Comments.deleteMany({ author: req.user._id });
  if (req.user.img) {
    await deleteFileAsync({ fileId: req.user.img });
  }
  await User.findByIdAndDelete(req.user._id);

  return res.send("ok");
};

export const auth = async (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  throw new Unauthorized();
};

export const setImage = async (req, res, next) => {
  if (req.session.user.img) {
    await deleteFileAsync({ fileId: req.session.user.img });
  }
  const bufferStream = new PassThrough();
  bufferStream.end(req.file.buffer);
  const { data } = await uploadAsync({
    media: {
      mimeType: req.file.mimetype,
      body: bufferStream,
    },
    resource: {
      name: req.session.user.id,
    },
  });

  req.user.img = data.id;
  await req.user.save();

  req.session.regenerate((err) => {
    if (err) return next(err);

    req.session.user = req.user.toJSON();
    return res.send(req.user);
  });
};

export const getImage = async (req, res) => {
  const { id } = req.params;

  const img = await getFileAsync(
    {
      fileId: id,
      alt: "media",
    },
    { responseType: "stream" }
  );

  return img.data.pipe(res);
};

export const imgAuth = async (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  req.user = await User.findById(req.session.user.id);
  return next();
};
