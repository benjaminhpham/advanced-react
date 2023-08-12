import React, { useState } from "react";

export default function SearchTodos({ todoTitle, setTodoTitle }) {
  return (
    <input
      type="text"
      placeholder="Search todos..."
      value={todoTitle}
      onChange={(e) => {
        setTodoTitle(e.target.value);
      }}
    />
  );
}
