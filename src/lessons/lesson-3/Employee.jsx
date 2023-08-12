import React from "react";

export default function Employee({ firstName: first, lastName: last }) {
  return (
    <div>
      <h3>
        Employee Name: {first} {last}
      </h3>
    </div>
  );
}
