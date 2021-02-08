import {Schema, model} from 'mongoose';
import uuid from 'uuid';

const commentsSchema = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  author: {
    type: String,
    ref: 'User'
  },
  post: {
    type: String,
    ref: 'Post'
  },
  message: String
}, {timestamps: true});

commentsSchema.set('toJSON', {
  transform: (doc,ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model('Comment',commentsSchema);