
import { useState, useEffect } from "react";

function Username() {
  const savedName = localStorage.getItem("username") || "";
  const [name, setName] = useState(savedName);

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <div className="container mt-3">
      <div className="card p-3">
        <h3>Persistent Username</h3>

        <label>Enter your name</label>

        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}/>

        <p className="mt-3">Your name is: {name}</p>
      </div>
    </div>
  );
}

export default Username;
