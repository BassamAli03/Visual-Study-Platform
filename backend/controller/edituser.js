const express = require('express');
const User = require("../DataModels/UserModel");
const router = express.Router();

router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: 'Error fetching user', error });
    }
});

router.put('/update-user/:id', async (req, res) => {
    const { name, email, profilepic } = req.body; 
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name,
        email,
        profilepic
      }, { new: true });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
});

module.exports = router;
