import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
const App = () => {
  const info = "Info";
  return (
    <div className="App">
      <Header />
      <TaskList title="Random" info={info} />
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return <div>App</div>;
//   }
// }
