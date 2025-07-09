import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div className="p-5">
      <h2>Count: {count}</h2>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-500 text-white p-2"
      >
        Increment Count
      </button>

      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
