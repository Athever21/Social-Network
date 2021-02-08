import User from '../models/User';

import {BadRequest} from '../utils/Errors';

export const loginUser = async(req,res,next) => {
  const {username,password} = req.body;

  if(!username || !password) {
    throw new BadRequest("Missing username or password");
  }

  const user = await User.findOne({username});

  if(!user || !await User.validatePassword(password,user)) {
    throw new BadRequest("Invalid username or password");
  }

  req.session.regenerate((err) => {
    if(err) {
      return next(err);
    }

    req.session.user = user.toJSON();
    console.log(user.toJSON());
    return res.json(user);
  })
}

export const logoutUser = async(req,res,next) => {
  req.session.destroy((err) => {
    if(err) {
      return next(err);
    }
  });

  return res.send('ok');
}

export const getSessionUser = async(req,res) => {
  return res.json(req.session.user);
} 