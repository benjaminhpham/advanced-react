import React from "react";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./Todo";

export default function App11() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
