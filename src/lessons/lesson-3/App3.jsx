import React from "react";
import Employee from "./Employee";

const employeeInfo = [
  { firstName: "Jack", lastName: "Smith", age: 21, employeeId: 1 },
  { firstName: "Stephanie", lastName: "A", age: 28, employeeId: 2 },
  { firstName: "George", lastName: "B", age: 32, employeeId: 3 },
  { firstName: "Anthony", lastName: "C", age: 25, employeeId: 4 },
];

export default function App3() {
  return (
    <>
      {employeeInfo.map((employee, index) => {
        // using spread operator to pass props
        return <Employee key={employee.employeeId} {...employee} />;
      })}
    </>
  );
}
