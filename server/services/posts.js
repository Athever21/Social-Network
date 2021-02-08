import Post from "../models/Post";
import Friends from "../models/Friends";
import stream from "stream";

import { Unauthorized, Forbidden, NotFound, BadRequest } from "../utils/Errors";
import { uploadAsync, getFileAsync, deleteFileAsync } from "../google-drive";

export const auth = (req, res, next) => {
  if (req.session.user) {
    return next();
  }

  throw new Unauthorized();
};

export const getAllPosts = async (req, res) => {
  const perPage = 25;
  const { page = 0 } = req.query;

  const posts = await Post.find()
    .skip(parseInt(page) * perPage)
    .limit(perPage);

  return res.json(posts);
};

export const createPost = async (req, res, next) => {
  const { message } = JSON.parse(req.files.message[0].buffer.toString());

  const post = new Post({
    message,
    author: req.session.user.id,
  });

  if(Object.keys(req.files).length === 1) {
    await post.save();
    return res.json({...post._doc, author: req.session.user});
  }

  try {
    const folder = await uploadAsync({
      resource: {
        name: post._id,
        mimeType: "application/vnd.google-apps.folder",
      },
      fields: "id",
    });

    let i = 0;
    for (const file of req.files.file) {
      let bufferStream = new stream.PassThrough();
      bufferStream.end(file.buffer);
      const res = await uploadAsync({
        media: {
          mimeType: file.mimetype,
          body: bufferStream,
        },
        resource: {
          name: i++,
          parents: [folder.id],
        },
      });

      post.files = [...post.files, res.data.id];
    }

    await post.save();
    return res.json({...post._doc, author: req.session.user});
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

export const getPostsForUser = async (req, res) => {
  const perPage = 5;
  const user = req.params.userId;
  const { page = 0 } = req.query;

  const f = await Friends.findOne({ user });
  const friends = (f) ? f.friends : [];

  const posts = await Post.find({
    author: { $in: [...friends, user] },
  },{usersLiked: 0})
    .sort({ createdAt: -1 })
    .populate("author")
    .skip(parseInt(page) * perPage)
    .limit(perPage)
    .exec();

  return res.json(posts);
};

export const getImage = async (req, res) => {
  const { imgId } = req.params;

  const img = await getFileAsync(
    {
      fileId: imgId,
      alt: "media",
    },
    { responseType: "stream" }
  );

  return img.data.pipe(res);
};

export const authToAlter = async (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  const post = await Post.findById(req.params.id).populate("author");

  if (!post) {
    throw new NotFound();
  }

  if (
    post.author._id !== req.session.user.id &&
    req.session.user.username !== "admin" &&
    req.method !== "PATCH" &&
    req.method !== "GET"
  ) {
    throw new Forbidden();
  }

  req.post = post;
  return next();
};

export const getPost = async (req, res) => {
  return res.json(req.post);
};

export const changePost = async (req, res, next) => {
  for (const key of Object.keys(req.body)) {
    req.post[key] = req.body[key];
  }

  await req.post.save();

  return res.json(req.post);
};

export const likePost = async (req, res, next) => {
  const index = req.post.usersLiked.findIndex((x) => x === req.session.user.id);
  let liked = true;

  if (index !== -1) {
    req.post.usersLiked.splice(index, 1);
    req.post.likes--;
    liked = false;
  } else {
    if (req.post.userLiked) {
      req.post.usersLiked.push(req.session.user.id);
    } else {
      req.post.usersLiked = [req.session.user.id];
    }

    req.post.likes++;
  }

  await req.post.save();

  return res.json({post: req.post,liked});
};

export const removePost = async (req, res) => {
  if(req.post.files.length > 0) {
    await deleteFileAsync({ fileId: req.params.id });
  }
  await Post.findByIdAndRemove(req.params.id);
  return res.send("deleted");
};
