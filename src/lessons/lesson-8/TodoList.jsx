import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchTodos from "./SearchTodos";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  const searchedTodos = todos.filter((todo) => todo.title.includes(todoTitle));

  console.log("todoList", todos);
  return (
    <div>
      <h3>Todo List</h3>
      <SearchTodos todoTitle={todoTitle} setTodoTitle={setTodoTitle} />
      {searchedTodos.map((todo) => {
        const { userId, title, id } = todo;
        return (
          <div key={id}>
            <h3>
              {title}: {userId}
            </h3>
          </div>
        );
      })}
      )
    </div>
  );
}
