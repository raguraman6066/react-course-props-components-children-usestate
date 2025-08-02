import { useState, useRef } from "react";
import "./AddTask.css";

const AddTask = ({ setTasks }) => {
  // const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);
  const handleReset = () => {
    // setTaskValue("");
    taskRef.current.value = "";
    setProgress(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskRef.current.value,
      completed: Boolean(progress),
    };
    setTasks((prev) => [...prev, task]);
    console.log(task);
    handleReset();
  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          // onChange={handleChange}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="on"
          // value={taskValue}
          ref={taskRef}
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>
        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>
    </section>
  );
};

export default AddTask;
