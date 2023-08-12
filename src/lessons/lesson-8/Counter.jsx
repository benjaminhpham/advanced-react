import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  // // componentDidMount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log("The useEffect ran");
  // }, [count, count2]);

  // // componentWillUnmount
  // useEffect(() => {
  //   console.log("The useEffect ran");
  //   return () => {
  //     console.log("The return being ran");
  //   };
  // }, []);

  // // combine useEffect and cleanup function
  // useEffect(() => {
  //   console.log(`The count has updated to ${count}`);
  //   return () => {
  //     console.log(`We are in the cleanup - the count is ${count}`);
  //   };
  // }, [count]);

  return (
    <div>
      <h3>Counter</h3>
      <p>current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        Increase count 2
      </button>
    </div>
  );
}
