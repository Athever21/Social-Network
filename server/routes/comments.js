import {Router} from 'express';

import autoCatch from '../utils/autoCatch';

import {
  addComment,
  auth,
  authToAlter,
  getCommentsForPost,
  getComment,
  changeComment,
  removeComment
} from '../services/comments';

const router = Router();

router
  .route('/')
  .all(autoCatch(auth))
  .post(autoCatch(addComment));

router
  .route('/post/:postId')
  .all(autoCatch(auth))
  .get(autoCatch(getCommentsForPost));

router
  .route('/:id')
  .all(autoCatch(authToAlter))
  .get(autoCatch(getComment))
  .put(autoCatch(changeComment))
  .delete(autoCatch(removeComment));

export default router;