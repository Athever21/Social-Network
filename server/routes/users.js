import { Router } from "express";
import autoCatch from '../utils/autoCatch';
import {
  getAllUsers,
  createUser,
  getUser,
  changeUser,
  removeUser,
  authorize,
  auth,
  setImage,
  getImage,
  imgAuth
} from "../services/users";
import multer from 'multer';

const router = Router();
const upload = multer();

router
  .route("/")
    .get(autoCatch(getAllUsers))
    .post(autoCatch(createUser));

router
  .route("/img")
  .all(autoCatch(imgAuth))
  .post(upload.single('userPhoto'),autoCatch(setImage));

router
  .route("/img/:id")
  .all(autoCatch(auth))
  .get(autoCatch(getImage));

router
  .route("/:id")
    .all(autoCatch(authorize))
    .get(autoCatch(getUser))
    .patch(autoCatch(changeUser))
    .delete(autoCatch(removeUser));

export default router;
