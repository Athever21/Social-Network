import {Router} from 'express';

import autoCatch from '../utils/autoCatch';

import {loginUser,logoutUser,getSessionUser} from '../services/auth';

const router = Router();

router
  .route('/login')
  .post(autoCatch(loginUser));

router
  .route('/logout')
  .post(autoCatch(logoutUser));

router
  .route('/session')
  .post(autoCatch(getSessionUser));

export default router;