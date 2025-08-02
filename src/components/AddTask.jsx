import { useState } from "react";
import "./AddTask.css";

const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");

  return (
    <section className="addtask">
      <form>
        <input
          onChange={(e) => setTaskValue(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Task Name"
          autoComplete="on"
        />
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default AddTask;
