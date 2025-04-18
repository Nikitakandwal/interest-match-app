const express = require('express');
const router = express.Router();
const User = require('../models/User');
 
router.post('/signup', async (req, res) => {
  const { name, email, interests } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email, interests });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
 
router.get('/match', async (req, res) => {
    const { email, exclude } = req.query;
  
    try {
      const currentUser = await User.findOne({ email });
      if (!currentUser) return res.status(404).json({ message: 'User not found' });
  
      const excludeList = exclude ? exclude.split(',') : [];
      const matchQuery = {
        email: { $nin: [email, ...excludeList] },  
        interests: { $in: currentUser.interests },
      };
  
      const potentialMatches = await User.find(matchQuery);
  
      if (potentialMatches.length === 0) {
        return res.json({ message: 'No match' });
      }
  
      const randomMatch = potentialMatches[Math.floor(Math.random() * potentialMatches.length)];
      res.json(randomMatch);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  
 
router.get('/user', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json(user);  
    }
    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
