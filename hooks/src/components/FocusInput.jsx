
import { useState, useRef } from "react";

function FocusInput() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="container mt-4">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h3 className="mb-3">Auto Focus Input</h3>

        <input
          ref={inputRef}
          type="text"
          className="form-control mb-3"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div>
          <button
            className="btn btn-primary me-2"
            onClick={() => inputRef.current.focus()}
          >
            Focus Input
          </button><br></br>

          <button
            className="btn btn-secondary"
            onClick={() => setText("")}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default FocusInput;
