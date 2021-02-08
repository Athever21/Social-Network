import { model, Schema } from "mongoose";
import uuid from "uuid";
import dayjs from 'dayjs';

const messageSchema = new Schema({
  _id: {
    type: String,
    default: uuid,
  },
  from: {
    type: String,
    ref: "User",
  },
  to: {
    type: String,
    ref: "User",
  },
  message: String,
  read: {
    type: Boolean,
    default: false
  },
},{timestamps: true});

messageSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default model("Message", messageSchema);
