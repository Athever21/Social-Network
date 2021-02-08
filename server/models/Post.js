import {model, Schema} from 'mongoose';
import uuid from 'uuid';

const postSchema = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  message: String,
  author: {
    type: String,
    ref: 'User'
  },
  likes: {
    type: Number,
    default: 0
  },
  usersLiked: {
    type: [String],
    ref: 'User',
    default: []
  },
  files: {
    type: [String],
    default: []
  }
}, {timestamps: true});


postSchema.set('toJSON',{
  transform: (doc,ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model('Post',postSchema);