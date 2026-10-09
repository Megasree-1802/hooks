
import { useState, useRef, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="container mt-3">
      <div className="card p-3">
        <h3>Stopwatch</h3>

        <h2>{seconds} seconds</h2>

        <button className="btn btn-success mb-2" onClick={start}> Start </button>

        <button className="btn btn-warning mb-2" onClick={pause}> Pause</button>

        <button className="btn btn-danger" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
