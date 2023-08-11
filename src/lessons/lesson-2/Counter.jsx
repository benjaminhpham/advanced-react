import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <>
      <p>The count is: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)} name="increment">
        Increment
      </button>
      <button
        onClick={() => setCount((prev) => prev - 1)}
        name="decrement"
        disabled={count === 0}
      >
        Decrement
      </button>
    </>
  );
}
