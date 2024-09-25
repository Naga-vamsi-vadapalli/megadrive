// src/components/Tasks/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from '../axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchTasks(); // Refresh task list
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Call fetchTasks on component mount
  }, []);

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.task}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
