import { useState, useEffect } from 'react';
import tasksData from '../assets/data.json';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false, timestamp: new Date().toISOString() }]);
  };

  const updateTask = (id, title, description) => {
    setTasks((tasks) => tasks.map(task =>
      task.id === id ? { ...task, title, description, timestamp: new Date().toISOString() } : task
    ));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return { tasks, addTask, updateTask, toggleComplete };
};

export default useTasks;
