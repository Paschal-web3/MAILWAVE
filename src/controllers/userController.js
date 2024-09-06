const User = require('../models/user');

exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    const savedUser = await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user.' });
  }
};
