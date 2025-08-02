import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record lecture", completed: false },
    { id: 2, name: "watch lecture", completed: true },
    { id: 3, name: "practice lecture", completed: false },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <AddTask setTasks={setTasks} />
        <TaskList title="Random" tasks={tasks} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return <div>App</div>;
//   }
// }
