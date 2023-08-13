import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/ducks/counter";

export default function Counter(props) {
  const [votes, setVotes] = useState(0);
  const { name } = props;

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3>Votes: {votes}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
    </div>
  );
}
