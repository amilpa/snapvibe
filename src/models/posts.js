import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.models?.User || mongoose.model("User", postSchema);
