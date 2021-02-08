import { Router } from "express";

import {
  auth,
  getMessages,
  addMessage,
  authToAlter,
  changeMessage,
  removeMessage,
  countMessages
} from "../services/message";

import autoCatch from "../utils/autoCatch";

const router = Router();

router
  .route("/")
  .all(autoCatch(auth))
  .get(autoCatch(getMessages))
  .post(autoCatch(addMessage));

router
  .route("/count")
  .all(autoCatch(auth))
  .get(autoCatch(countMessages));

router
  .route("/:id")
  .all(autoCatch(authToAlter))
  .patch(autoCatch(changeMessage))
  .delete(autoCatch(removeMessage));

export default router;
