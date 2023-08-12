import React from "react";

const employees = [
  { name: "Anthony", id: "ABC" },
  { name: "George", id: "CBA" },
  { name: "Stephanie", id: "BAC" },
];

export default function App5() {
  const arr1 = [0, 1, 2];
  const arr2 = [3, 4, 5];
  const arr3 = [...arr1, ...arr2];

  const baseEmployeeObject = {
    role: "employee",
    company: "CodeSandbox",
  };

  const firstEmployee = { ...baseEmployeeObject, ...employees[0] };

  console.log(arr3);
  console.log(firstEmployee);

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
