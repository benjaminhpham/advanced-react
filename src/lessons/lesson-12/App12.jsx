import React from "react";
import Counter from "./Counter";
import { useSelector } from "react-redux";

export default function App12() {
  const { count } = useSelector((state) => state.counter);
  const voters = ["Ben Fam", "John Smith", "Angela Yu", "Kevin Tong"];
  return (
    <div>
      <h1>Redux Made Easy</h1>
      <h3>Total Votes: {count}</h3>
      {voters.map((voter) => (
        <Counter key={voter} name={voter} />
      ))}
    </div>
  );
}
