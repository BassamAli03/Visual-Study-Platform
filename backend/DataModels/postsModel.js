const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    video: String,
    groupId: mongoose.Schema.Types.ObjectId,
    likes: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ text: String, userName: String }],
  }, { timestamps: true }); 
  
  const Post = mongoose.model("Post", postSchema);
  module.exports = Post; 
