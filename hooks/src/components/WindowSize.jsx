
import { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function changeWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="container mt-3">
      <div className="card p-3">
        <h3>Window Size</h3>
        <p>Current Width: {width}px</p>
      </div>
    </div>
  );
}

export default WindowSize;
