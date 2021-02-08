import { Router } from "express";
import autoCatch from "../utils/autoCatch";

import {
  auth,
  getPosts,
  deletePost,
  getUsers,
  deleteUser,
  getFiles,
  deleteFile,
} from "../services/admin";

const router = Router();

router.all(autoCatch(auth));

router.route("/post").get(autoCatch(getPosts)).delete(autoCatch(deletePost));

router.route("/user").get(autoCatch(getUsers)).delete(autoCatch(deleteUser));

router.route("/file").get(autoCatch(getFiles)).delete(autoCatch(deleteFile));

export default router;
