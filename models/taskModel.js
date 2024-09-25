// models/taskModel.js
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['pending', 'in progress', 'done', 'completed'], default: 'pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  taskId: { type: String, default: uuidv4 },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
