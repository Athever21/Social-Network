import { Router } from "express";
import multer from "multer";

import autoCatch from '../utils/autoCatch';

import {
  getAllPosts,
  createPost,
  auth,
  getPostsForUser,
  getImage,
  authToAlter,
  getPost,
  changePost,
  removePost,
  likePost
} from "../services/posts";

const router = Router();
const upload = multer();

router
  .route("/")
  .all(autoCatch(auth))
  .get(autoCatch(getAllPosts))
  .post(upload.fields([{ name: "file" }, { name: "message" }]), autoCatch(createPost));

router
  .route("/user/:userId")
  .all(autoCatch(auth))
  .get(autoCatch(getPostsForUser));

router
  .route("/img/:imgId")
  .all(autoCatch(auth))
  .get(autoCatch(getImage));

router
  .route("/:id")
  .all(autoCatch(authToAlter))
  .get(autoCatch(getPost))
  .put(autoCatch(changePost))
  .patch(autoCatch(likePost))
  .delete(autoCatch(removePost));

export default router;
