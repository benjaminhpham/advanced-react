import React from "react";
import { useNavigate } from "react-router-dom";

export default function TodoCard({ todo }) {
  const { id, title, completed } = todo;
  const navigate = useNavigate();

  return (
    <div className="TodoCard" onClick={() => navigate(`/todos/${id}`)}>
      <h3>
        {id} - {title}
      </h3>
      <p>{`Completed: ${completed}`}</p>
    </div>
  );
}
