import React, { useState } from "react";
import Counter from "./Counter";
import TodoList from "./TodoList";

export default function App8() {
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div>
      {/* <h1>Our App</h1>
      <button onClick={() => setShowCounter((prev) => !prev)}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {showCounter && <Counter />} */}
      <TodoList />
    </div>
  );
}
