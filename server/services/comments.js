import Comment from "../models/Comments";
import { Forbidden, BadRequest, Unauthorized } from "../utils/Errors";

export const auth = async (req, res,next) => {
  if (req.session.user) {
    return next();
  }

  throw new Unauthorized();
};

export const authToAlter = async (req, res,next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    throw new BadRequest("Comment not found");
  }

  if (comment.author !== req.session.user.id) {
    throw new Forbidden();
  }

  req.comment = comment;
  return next();
};

export const addComment = async (req, res, next) => {
  const comment = new Comment({
    message: req.body.message,
    author: req.session.user.id,
    post: req.body.post,
  });

  await comment.save();

  return res.json(comment);
};

export const getCommentsForPost = async (req, res, next) => {
  try {
    const perPage = 20;
    const { postId } = req.params;
    const { page = 0 } = req.query;

    const comments = await Comment.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("author")
      .skip(parseInt(page) * perPage)
      .limit(perPage)
      .exec();

    return res.json(comments);
  } catch (err) {
    return next(err);
  }
};

export const getComment = async (req, res) => {
  return res.json(req.comment);
};

export const changeComment = async (req, res) => {
  req.comment.message = req.body.message;

  await req.comment.save();

  return res.json(req.comment);
};

export const removeComment = async (req, res) => {
  await Comment.findByIdAndRemove(req.comment._id);
  return res.send("deleted");
};
