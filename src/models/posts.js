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
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Post", postSchema);
