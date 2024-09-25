// src/components/Tasks/TaskForm.js
import React, { useState } from 'react';
import axios from '../axios';

function TaskForm() {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', { task }); // POST request to add task
      setTask('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Add Task</h2>
      <input type="text" value={task} onChange={handleChange} placeholder="New Task" required />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
