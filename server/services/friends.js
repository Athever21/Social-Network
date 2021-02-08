import Friends from "../models/Friends";

import {Unauthorized,NotFound} from '../utils/Errors';

export const auth = async (req, res, next) => {
  if (!req.session.user) {
    throw new Unauthorized();
  }

  return next();
};

export const addFriend = async (req, res) => {
  const { user1, user2 } = req.body;

  for(const user of [user1,user2]) {
    let f = await Friends.findOne({user});
    const toAdd = (user === user1) ? user2 : user1;

    if(f) {
      f.friends = [...f.friends,toAdd];
    } else {
      f = new Friends({
        user,
        friends: [toAdd]
      });
    }

    await f.save();
  }

  return res.send("added");
};

export const getFriends = async (req, res) => {
  const { user } = req.params;
  const { page = 0 } = req.query;
  const perPage = 10;

  const friends = await Friends.findOne(
    { user },
    { friends: { $slice: [perPage * parseInt(page), perPage] } }
  )
    .populate("friends")
    .exec();

  return res.json(friends);
};

export const authToAlter = async(req,res,next) => {
  if(!req.session.user) {
    throw new Unauthorized();
  }

  const f = await Friends.findOne({user: req.session.user.id});

  if(!f) {
    throw new NotFound();
  }

  req.f = f;
  return next();
}

export const removeFriend = async(req,res,next) => {
  try {
    const index = req.f.friends.findIndex(x => x === req.body.user);
    req.f.friends.splice(index,1);
    
    await req.f.save();

    return res.json(req.f);
  } catch(err) {
    return next(err);
  }
}