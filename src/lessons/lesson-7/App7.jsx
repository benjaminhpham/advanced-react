import React, { useState } from "react";

export default function App7() {
  const employees = ["Anthony", "George"];
  const firstEmployee = employees && employees[0];

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {employees && employees.length > 0 && (
        <div>
          <h1>Employee List: </h1>
          {employees.map((emp) => (
            <h2 key={emp}>{emp}</h2>
          ))}
        </div>
      )}
      <hr />

      <h2>Welcome to the App:</h2>
      <button onClick={() => setLoggedIn((prev) => !prev)}>
        {loggedIn ? "log out" : "login"}
      </button>
      {loggedIn ? <h2>Hello, Anthony</h2> : <h2>Please log in to continue</h2>}
    </div>
  );
}
