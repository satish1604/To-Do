import React from "react";
import { useSearchParams } from "react-router-dom";
import Task from "./Task";

const TasksList = ({ tasks, updateTask, toggleComplete }) => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (<div className="task-list">
        {filteredTasks.map(task => (
            <Task
                key={task.id}
                task={task}
                onUpdateTask={updateTask}
                onToggleComplete={toggleComplete}
            />
        ))}
    </div>);
};

export default TasksList;