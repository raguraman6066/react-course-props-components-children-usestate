import React from "react";
import "./TaskCard.css";
// import styles from "./TaskCard.module.css";
const TaskCard = ({ task, handleDelete, info }) => {
  return (
    <div className="taskcard">
      <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
        <span>
          {task.id}-{task.name}
        </span>
        <button onClick={() => handleDelete(task.id)} className="delete">
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskCard;
