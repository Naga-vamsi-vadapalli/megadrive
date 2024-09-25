// controllers/userController.js
const User = require('../models/userModel');

// Update user profile
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(req.user._id);

    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      user.password = password;
    }

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
