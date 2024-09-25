// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a task (protected)
router.post('/', protect, createTask);

// Route to get all tasks of the logged-in user (protected)
router.get('/', protect, getTasks);

// Route to update a specific task (protected)
router.put('/:taskId', protect, updateTask);

// Route to delete a specific task (protected)
router.delete('/:taskId', protect, deleteTask);

module.exports = router;
