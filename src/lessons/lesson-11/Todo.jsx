import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

export default function Todo() {
  const [todoDetails, setTodoDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      setTodoDetails(res.data);
    };

    fetchTodo();
  }, []);

  const { userId, id: todoId, title, completed } = todoDetails || {};

  return (
    <div>
      {todoDetails ? (
        <div>
          <h3>{`Todo Id: ${userId}`}</h3>
          <h3>{`User Id: ${todoId}`}</h3>
          <h3>{`Title: ${title}`}</h3>
          <h3>{`Completed: ${completed}`}</h3>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
}
