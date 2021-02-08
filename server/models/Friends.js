import { Schema, model } from "mongoose";

const friendsSchema = new Schema({
  user: {
    type: String,
    ref: "User",
  },
  friends: {
    type: [{ type: String, ref: "User" }],
    ref: "User",
  },
});

friendsSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export default model("Friends", friendsSchema);
