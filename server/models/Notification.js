import {model,Schema} from 'mongoose';
import uuid from 'uuid';

const notificationSchema = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  from: {
    type: String,
    ref: 'User'
  },
  to: {
    type: String,
    ref: 'User'
  },
  type: {
    type: String,
    enum: ['FRIEND','LIKE_POST','COMMENT']
  },
  post: String,
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});

notificationSchema.pre('save', function(next) {
  const now = Date.now();
  this.updatedAt = now;
  if(!this.createdAt) {
    this.createdAt = now;
  }

  next();
})

notificationSchema.set('toJSON',{
  transform: (doc,ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model('Notif',notificationSchema);