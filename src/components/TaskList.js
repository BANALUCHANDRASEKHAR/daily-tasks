import React, { useState } from "react";
import TaskEditModal from "./TaskEditModal";

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setEditingTask(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updatedTask) => {
            updateTask(editingTask.id, updatedTask);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
}

export default TaskList;
