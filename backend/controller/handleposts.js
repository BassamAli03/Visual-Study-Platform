const express = require("express");
const mongoose = require("mongoose");
const Group =require("../DataModels/groupModel");
const Post =require("../DataModels/postsModel");
const bodyParser = require("body-parser");
const path = require('path');
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
app.use('/postUploads', express.static(path.join(__dirname, '../../frontend/src/Assets/postUploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, "../../frontend/src/Assets/postUploads/");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).fields([
  { name: 'image', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]);

app.post("/fetch-posts", async (req, res) => {
  const { groupId, userId } = req.body;
  try {
      const posts = await Post.find({ groupId }).sort({ createdAt: -1 });
      const postsWithLikeInfo = posts.map(post => ({
          ...post.toObject(),
          likedByUser: post.likedBy.includes(userId)
      }));
      res.status(200).json({ posts: postsWithLikeInfo });
  } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/create-post", upload, async (req, res) => {
  try {
    const { title, content, groupId } = req.body;
    let image = req.files.image ? `postUploads/${req.files.image[0].filename}` : "";
    let video = req.files.video ? `postUploads/${req.files.video[0].filename}` : "";

    console.log(video);

    const newPost = new Post({ title, content, image, video, groupId });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to handle post likes
app.put("/like-post/:postId", async (req, res) => {
  const { postId } = req.params;
  const userId = req.body.userId; // Ensure userId is correctly parsed and used

  try {
      const post = await Post.findById(postId);
      if (!post) {
          return res.status(404).send({ message: "Post not found" });
      }

      const likedIndex = post.likedBy.indexOf(userId);
      if (likedIndex === -1) {
          post.likedBy.push(userId);
          post.likes += 1;
      } else {
          post.likedBy.splice(likedIndex, 1);
          post.likes -= 1;
      }

      await post.save();
      res.status(200).json({ message: "Post liked/unliked successfully", likes: post.likes });
  } catch (error) {
      console.error("Error liking/unliking post:", error);
      res.status(500).json({ message: "Internal server error", error });
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
