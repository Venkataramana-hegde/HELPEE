import React from "react";

interface Props {
  onClick: () => void;
}

const Child: React.FC<Props> = React.memo(({ onClick }) => {
  console.log("Child rendered ✅");

  return (
    <div className="mt-4">
      <button
        onClick={onClick}
        className="bg-blue-500 text-white p-2"
      >
        Call Function
      </button>
    </div>
  );
});

export default Child;
