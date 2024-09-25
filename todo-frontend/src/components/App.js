// src/components/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import TaskForm from './Tasks/TaskForm';
import TaskList from './Tasks/TaskList';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="app">
      <h1>Todo Application</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add-task" element={<TaskForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
