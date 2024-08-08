import React from 'react';

import './styles.css';

import SearchBar from './components/SearchBar';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';

import useTasks from './hooks/useTasks';

const App = () => {
  const { tasks, addTask, updateTask, toggleComplete } = useTasks();

  return (
    <div className="app">
      <SearchBar />
      <TasksList tasks={tasks} updateTask={updateTask} toggleComplete={toggleComplete} />
      <TaskForm onAddTask={addTask} />
    </div>
  );
};

export default App;
