const express = require('express');
const Group=require("../DataModels/groupModel");
const router = express.Router();

router.get('/groups/:id', async (req, res) => {
    try {
        const group = await Group.findById(req.params.id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json(group);
    } catch (error) {
        console.error("Error fetching group:", error);
        res.status(500).json({ message: 'Error fetching group', error });
    }
});

router.put('/update-group/:id', async (req, res) => {
    const { name, description, privacy, memberLimit } = req.body;
    try {
      const group = await Group.findByIdAndUpdate(req.params.id, {
        name,
        description,
        privacy,
        memberLimit
      }, { new: true }); 
  
      if (!group) {
        return res.status(404).send('Group not found');
      }
      res.json(group);
    } catch (error) {
      res.status(500).json({ message: 'Error updating group', error });
    }
  });

  router.delete('/delete-group/:id', async (req, res) => {
    try {
      const deletedGroup = await Group.findByIdAndDelete(req.params.id);
      if (!deletedGroup) {
        return res.status(404).json({ message: 'Group not found' });
      }
      res.status(200).json({ message: 'Group deleted successfully' });
    } catch (error) {
      console.error("Error deleting group:", error);
      res.status(500).json({ message: 'Error deleting group', error });
    }
  });
  
  module.exports = router;