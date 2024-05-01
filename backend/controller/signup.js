
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { generateToken } = require("./generateToken");
const User=require("../DataModels/UserModel");
const { authenticateToken } = require("./authenticateToken");

const app = express();
mongoose.connect("mongodb://localhost:27017/virtual-study-group", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.use(bodyParser.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  try {
    const {username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const name=username;
    const newUser = new User({ name,email, password });
    await newUser.save();
    const token = generateToken(newUser._id, newUser.email); 
    res.status(201).json({
      message: "User created successfully",
      token,
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = generateToken(user._id, user.email); 
    res.status(200).json({
      message: "Login successfully",
      token,
      userId: user._id.toString(),
      name:user.name
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = app;