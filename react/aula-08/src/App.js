import "./App.css";
// import ComponentSample from "./components/ClassComponent";
import ComponentSample from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponentSample title="Título A Customizado" />
      </header>
    </div>
  );
}

export default App;
