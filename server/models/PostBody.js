import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  streak: Number,
  code: String,
  cards: [
    { l1: String, l2: String, date: Number, delay: Number, reviews: Number }
  ]
});

const PostBody = mongoose.model("PostBody", postSchema);

export default PostBody;
