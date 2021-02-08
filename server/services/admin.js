import Post from "../models/Post";
import User from "../models/User";
import Comments from "../models/Comments";
import Notif from "../models/Notification";
import Friends from "../models/Friends";

import { showFilesAsync, deleteFileAsync } from "../google-drive";

import { Unauthorized, Forbidden } from "../utils/Errors";

export const auth = (req, res) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  if (!req.session.user.username !== "admin") {
    throw new Forbidden();
  }

  return next();
};

export const getPosts = async (req, res) => {
  const { page = 0 } = req.query;
  const perPage = 20;

  const posts = await Post.find()
    .populate("author")
    .skip(parseInt(page) * perPage)
    .exec();

  return res.json(posts);
};

export const deletePost = async (req, res) => {
  const { id } = req.query;

  const post = await Post.findById(id);

  for (const file of post.files) {
    await deleteFileAsync(file);
  }
  await Comments.deleteMany({ post: id });
  await Notif.deleteMany({ post: id });
  await Post.findByIdAndDelete(id);

  return res.send("ok");
};

export const getUsers = async (req, res) => {
  const { page = 0 } = req.query;
  const perPage = 50;

  const users = await User.find()
    .skip(parseInt(page) * perPage)
    .exec();

  return res.json(users);
};

export const deleteUser = async (req, res) => {
  const { id } = req.query;

  const posts = await Post.find({ author: id });
  const user = await User.findById(id);

  if (user.img) {
    await deleteFileAsync({fileId: user.img});
  }

  for (const post of posts) {
    for (const file of post.files) {
      await deleteFileAsync({fileId: file});
    }
    await Comments.deleteMany({ post: post.id });
    await Notif.deleteMany({ post: post.id });
    await Post.findByIdAndDelete(post.id);
  }

  const friends = await Friends.find({ friends: id });
  for (const friend of friends) {
    const index = friend.friends.findIndex((x) => x === req.user._id);
    friend.friends.splice(index, 1);
    await friend.save();
  }
  await Friends.deleteOne({ user: id });

  await Notif.deleteMany({ $or: [{ to: id }, { from: id }] });
  await User.findByIdAndDelete(id);

  return res.send("ok");
};

export const getFiles = async (req, res) => {
  console.log("a");
  const { page = 0 } = req.query;
  const perPage = 25;

  const skip = parseInt(page) * perPage;
  let count = 1;
  let arr = [];

  const files = await showFilesAsync();

  for (const file of files.data.files) {
    if (file.mimeType !== "application/vnd.google-apps.folder") {
      if ((count > skip) && (count - skip <= 25)) {
        console.log(file);
        arr.push(file.id);
        count++;
      } else {
        break;
      }
    }
  }

  return res.json({data: arr});
};

export const deleteFile = async (req, res) => {
  const { id } = req.query;
  await deleteFileAsync({fileId: id });
  return res.send("ok");
};
