import React, { useState } from "react";

const employee = {
  id: "ABC",
  name: "Anthony",
  salary: "$10",
  address: {
    salary: "$100",
    street: "200 Washington Ave",
    country: "USA",
    state: "DC",
    zones: {
      plantZone: "7B",
      alienZone: "41",
    },
  },
};

export default function App4() {
  const {
    name,
    id,
    salary: employeeSalary,
    address: {
      street,
      country,
      state,
      salary: addressSalary,
      zones: { plantZone, alienZone },
    },
  } = employee;

  return (
    <div>
      <h3>{name}</h3>
      <h3>{id}</h3>
      <h3>{`${street}, ${state}, ${country}`}</h3>
      <h3>{employeeSalary}</h3>
      <h3>{addressSalary}</h3>
      <h3>{plantZone}</h3>
      <h3>{alienZone}</h3>
    </div>
  );
}
