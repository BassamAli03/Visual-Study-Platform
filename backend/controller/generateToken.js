// token.js

const jwt = require("jsonwebtoken");
require('dotenv').config();
const generateToken = (userId, email) => {
  return jwt.sign(
    {
      userId: userId.toString(),
      email: email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

module.exports = { generateToken };
