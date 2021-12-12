import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  streak: { type: Number, default: 0 },
  code: String,
  last: { type: Number, default: 0 },
  cards: [
    { front: String, back: String, date: Number, delay: Number, reviews: Number }
  ]
});

const PostBody = mongoose.model("PostBody", postSchema);

export default PostBody;
