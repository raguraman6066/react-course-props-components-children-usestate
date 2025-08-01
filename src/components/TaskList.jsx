import React, { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";

const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record lecture", completed: false },
    { id: 2, name: "watch lecture", completed: true },
    { id: 3, name: "practice lecture", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    let newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  }

  return (
    <>
      <h2>Task List - {props.title} </h2>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              info={props.info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur.
        </p>
      </BoxCard>
    </>
  );
};

export default TaskList;
