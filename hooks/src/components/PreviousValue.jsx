
import { useState, useRef, useEffect } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(null);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div className="container mt-3">
      <div className="card p-3">
        <h3>Previous Value </h3>

        <p>Current value: {count}</p>
        <p>
          Previous value: {previousCount.current === null
            ? "-"
            : previousCount.current}
        </p>

        <button
          className="btn btn-success mb-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="btn btn-danger"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default PreviousValue;
