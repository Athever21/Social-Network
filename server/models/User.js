import {model, Schema} from 'mongoose';
import argon2 from 'argon2';
import uniqueV from 'mongoose-unique-validator';
import uuid from 'uuid';

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuid
  },
  username: {
    type: String,
    minlength: 3,
    maxlength: 16,
    unique: true
  },
  password: String,
  img: String
});

class User {
  static async validatePassword(password,userInfo) {
    const bool = await argon2.verify(userInfo.password,password);
    return bool;
  }

  static async createUser(fields) {
    const hash = await argon2.hash(fields.password);

    const user = new this({
      ...fields,
      password: hash
    });

    return user.save();
  }
}

userSchema.plugin(uniqueV);
userSchema.loadClass(User);

userSchema.set('toJSON',{
  transform: (doc,ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.password;
  }
});

export default model('User', userSchema);