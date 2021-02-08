import {Router} from 'express';

import autoCatch from '../utils/autoCatch';

import {
  addFriend,
  getFriends,
  auth,
  authToAlter,
  removeFriend
} from '../services/friends';

const router = Router();

router
  .route('/')
  .all(autoCatch(auth))
  .post(autoCatch(addFriend));

router
  .route('/:user')
  .all(autoCatch(authToAlter))
  .get(autoCatch(getFriends))
  .patch(autoCatch(removeFriend));

export default router;