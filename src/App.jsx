import "./App.css";
import AddTask from "./components/AddTask";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
const App = () => {
  const info = "Info";
  return (
    <div className="App">
      <Header />

      <AddTask />
      <TaskList title="Random" info={info} />
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
