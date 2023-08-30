import "./App.css";
import ComponenteExemplo from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteExemplo titulo="Título Customizado" />
      </header>
    </div>
  );
}

export default App;
