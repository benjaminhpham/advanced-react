import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        increment
      </button>
    </div>
  );
}
