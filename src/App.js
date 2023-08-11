import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [toggleCounter, setToggleCounter] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggleCounter((prevState) => !prevState)}>
        Show Counter
      </button>
      <Counter />
      {toggleCounter && <Counter />}
    </div>
  );
}

export default App;
