import React from "react";

const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
      <span>
        {task.id}-{task.name} - {info}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
