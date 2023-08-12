import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import "./App11.css";
import LoadingAnimation from "./LoadingAnimation";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };

    fetchTodos();
  }, []);

  return (
    <div className="TodoList">
      {!todos ? (
        <LoadingAnimation />
      ) : (
        todos.slice(0, 10).map((todo) => <TodoCard key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
