import React, { useState } from 'react';

const Task = ({ task, onUpdateTask, onToggleComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleSave = () => {
    onUpdateTask(task.id, editedTitle, editedDescription);
    setEditMode(false);
  };

  return (
    <div className="task">
      <h3 onClick={() => setIsExpanded(!isExpanded)}>{task.title}</h3>
      <button onClick={() => onToggleComplete(task.id)}>
        {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
      {isExpanded && (
        <div className="task-details">
          {editMode ? (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{task.description}</p>
              <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
              <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
