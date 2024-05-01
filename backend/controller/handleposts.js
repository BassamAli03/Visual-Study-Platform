const express = require("express");
const mongoose = require("mongoose");
const Group =require("../DataModels/groupModel");
const Post =require("../DataModels/postsModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const app = express();
mongoose.connect("mongodb://localhost:27017/virtual-study-group", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




app.use(bodyParser.json());
app.use(cors());

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "../frontend/public/postUploads/";
    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Endpoint to fetch posts for a group sorted by timestamp
app.post("/fetch-posts", async (req, res) => {
  try {
    const { groupId } = req.body;
    const posts = await Post.find({ groupId }).sort({ createdAt: -1 }); // Sort by createdAt field in descending order
    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to create a new post
app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const { title, content, groupId } = req.body;
    const image = req.file ? req.file.path : "";
    const newPost = new Post({ title, content, image, groupId });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to handle post likes
app.put("/like-post/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const { action } = req.body;
    let update = {};
    if (action === "increment") {
      update = { $inc: { likes: 1 } };
    } else if (action === "decrement") {
      update = { $inc: { likes: -1 } };
    } else {
      return res.status(400).json({ message: "Invalid action" });
    }
    await Post.findByIdAndUpdate(postId, update);
    res.status(200).json({ message: "Post liked/unliked successfully" });
  } catch (error) {
    console.error("Error liking/unliking post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to add a comment to a post
app.post("/add-comment/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const { comment, userName } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $push: { comments: { text: comment, userName: userName } } },
      { new: true }
    );
    res.status(200).json({ message: "Comment added successfully", updatedPost });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/fetch-user-all-posts", async (req, res) => {
    try {
      const { userId } = req.body;
      const groups = await Group.find({ $or: [{ adminId: userId }, { members: userId }] });
      const groupIds = groups.map(group => group._id);
      const posts = await Post.find({ groupId: { $in: groupIds } }).sort({ createdAt: -1 });
      res.status(200).json({ posts });
    } catch (error) {
      console.error("Error fetching user posts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
 });
module.exports = app;
