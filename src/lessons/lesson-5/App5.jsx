import React from "react";

const employees = [
  { name: "Anthony", id: "ABC" },
  { name: "George", id: "CBA" },
  { name: "Stephanie", id: "BAC" },
];

export default function App5() {
  return (
    <div>
      {employees.map(({ name, id }, index) => (
        <div key={id}>
          <h3>{`${index + 1} - Name: ${name} - ID: ${id}`}</h3>
        </div>
      ))}
    </div>
  );
}
