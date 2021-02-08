import { Router } from "express";

import autoCatch from '../utils/autoCatch';

import {
  createNotif,
  getAllNotif,
  changeNotif,
  deleteNotif,
  authToAlter
} from "../services/notifications";

const router = Router();

router
  .route("/")
  .get(autoCatch(getAllNotif))
  .post(autoCatch(createNotif));

router
  .route("/:id")
  .all(autoCatch(authToAlter))
  .patch(autoCatch(changeNotif))
  .delete(autoCatch(deleteNotif));

export default router;
