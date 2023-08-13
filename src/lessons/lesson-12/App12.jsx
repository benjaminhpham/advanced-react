import React, { useEffect } from "react";
import Counter from "./Counter";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/ducks/user";

export default function App12() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

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
