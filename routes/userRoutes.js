// routes/userRoutes.js
const express = require('express');
const { updateProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to update user profile (protected)
router.put('/profile', protect, updateProfile);

module.exports = router;
