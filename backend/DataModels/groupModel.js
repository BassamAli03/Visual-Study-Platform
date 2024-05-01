const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: String,
  description: String,
  privacy: String,
  memberLimit: Number,
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group; 
