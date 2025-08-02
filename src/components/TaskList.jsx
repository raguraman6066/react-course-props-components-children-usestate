import React, { useState } from "react";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    let newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
  }
  const styles = {
    color: "#be3434",
    // border: "1px solid #be3434",
    borderColor: show ? "#3D8361" : "#be3434",
    borderRadius: "5px",
    // padding: "20px",
  };

  return (
    <section className="tasklist">
      {/* <h2 style={styles}>Task List - {props.title} </h2> */}
      <ul>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={styles}>Task List </h2>
          <button className="trigger" onClick={() => setShow(!show)}>
            {show ? "hide tasks" : "show tasks"}
          </button>
        </div>
        {show &&
          tasks.map((task) => (
            <TaskCard task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      {/* <BoxCard result="success">
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
      </BoxCard> */}
    </section>
  );
};

export default TaskList;
