import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App14() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios.get("http://localhost:8000/user").then((res) => setUser(res.data));
  }, []);

  return (
    <div>
      {user && (
        <h1>
          Hello, {user.firstName} {user.lastName}
        </h1>
      )}
    </div>
  );
}
