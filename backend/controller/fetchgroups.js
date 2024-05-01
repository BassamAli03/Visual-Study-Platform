const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { generateToken } = require("./generateToken");
const { authenticateToken } = require("./authenticateToken");

const app = express();
mongoose.connect("mongodb://localhost:27017/virtual-study-group", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());


app.post("/fetch-grups", async (req, res) => {
  try {
    // Get the user ID from the authenticated token
    const userId = "66293e79487c9a2917c67352";
    console.log(userId);
    const userGroups = await Group.find([{ adminId: userId }]);
    console.log(userGroups);
    res.json({ groups: userGroups });
  } catch (error) {
    console.error("Error fetching user groups:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Other endpoints for authentication, group creation, etc.

module.exports = app;
