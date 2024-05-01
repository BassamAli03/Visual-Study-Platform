
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./authenticateToken");
const Group=require("../DataModels/groupModel")
const app = express();
mongoose.connect("mongodb://localhost:27017/virtual-study-group", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/create-group", async (req, res) => {
  try {
    const { name, description, privacy, memberLimit,adminId } = req.body;
    const newGroup = new Group({ name, description, privacy, memberLimit,adminId });
    await newGroup.save();
    res.status(201).json({ message: "Group created successfully", groupId: newGroup._id });
  } catch (error) {
    console.error("Error creating group:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/join-group", async (req, res) => {
  try {
    const { groupId, userId } = req.body;
    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    group.members.push(userId);
    await group.save();
    res.status(200).json({ message: "Joined group successfully" });
  } catch (error) {
    console.error("Error joining group:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/search-groups",async (req, res) => {
  try {
    const query = req.query.query;
    const regex = new RegExp(query, "i");
    const groups = await Group.find({ name: regex });
    res.json({ groups: groups }); 
  } catch (error) {
    console.error("Error searching groups:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.post("/fetch-groups", async (req, res) => {
  try {

    const userId = req.body.userId;
    console.log(userId);
    const userGroups = await Group.find({ $or: [{ adminId: userId }, { members: userId }] });
    res.json({ groups: userGroups });
  } catch (error) {
    console.error("Error fetching user groups:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = app;

