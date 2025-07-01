import { useState } from "react";

interface Operation {
  name: string;
  value: string;
}

const Calculator = () => {
  const operations = [
    { name: "C", value: "clear" },
    { name: "<-", value: "null" },
    { name: "%", value: "%" },
    { name: "/", value: "/" },
    { name: "sin", value: "Math.sin" },
    { name: "cos", value: "Math.cos" },
    { name: "tan", value: "Math.tan" },
    { name: "log", value: "Math.log" },
    { name: "7", value: "7" },
    { name: "8", value: "8" },
    { name: "9", value: "9" },
    { name: "X", value: "*" },
    { name: "4", value: "4" },
    { name: "5", value: "5" },
    { name: "6", value: "6" },
    { name: "-", value: "-" },
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "+", value: "+" },
    { name: "+/-", value: "toggle-sign" },
    { name: "0", value: "0" },
    { name: ".", value: "." },
    { name: "(", value: "(" },
    { name: ")", value: ")" },
    {name: "π", value: Math.PI.toString()},
    { name: "=", value: "equals" },
  ];
  const operators = ["+", "-", "*", "/", "%", "equals", "toggle-sign"];
  const isOperator = (val: string) => operators.includes(val);

  const [input, setInput] = useState<string>("");
  const [showUser, setShowUser] = useState<string>("");

  const handleToggle = () => {
    setInput((prev) => {
      let num = Number(prev);
      num = num * -1;
      return num.toString();
    });
    setShowUser((prev) => {
      let num = Number(prev);
      num = num * -1;
      return num.toString();
    });
  };

  const handleChange = (ops: Operation) => {
    // console.log(ops);
    const lastChar = input.slice(-1);
    if (
      isOperator(ops.value) &&
      input === "" &&
      ops.value !== "-" &&
      ops.value !== "."
    ) {
      return;
    }
    if (isOperator(lastChar) && isOperator(ops.value)) {
      setShowUser("Illegal expression");
      return;
    }

    if (ops.value === "null") {
      setInput((prev) => prev.slice(0, -1));
      setShowUser((prev) => prev.slice(0, -1));
      return;
    }

    if (ops.value === "toggle-sign") {
      handleToggle();
      return;
    }

    if (ops.value === "*") {
      setShowUser((prev) => prev + "X");
    } else if (ops.value === "Math.sin") {
      setShowUser((prev) => prev + "sin")
    } else if (ops.value === "Math.cos") {
      setShowUser((prev) => prev + "cos")
    } else if (ops.value === "Math.tan") {
      setShowUser((prev) => prev + "tan")
    } else if (ops.value === "Math.log") {
      setShowUser((prev) => prev + "log")
    } else {
      setShowUser((prev) => prev + ops.value);
    }
    if (ops.value === "clear") {
      setInput("");
      setShowUser("");
      return;
    }

    setInput((prevInput) => prevInput + ops.value);
    if (ops.value === "equals") {
      const res = parseFloat(eval(input).toFixed(12));
      setInput(String(res));
      setShowUser(String(res));
    }
  };

  return (
    <div className="h-screen grid place-content-center">
      <div className="border-2 rounded-md w-100 h-fit bg-gray-100">
        <div className="flex justify-between items-center pt-4 px-2">
          <p className=" font-bold">Texas Instruments</p>
          <div className="flex gap-1 items-center">
            <div className="bg-white w-5 h-5"></div>
            <div className="bg-white w-5 h-5"></div>
            <div className="bg-white w-5 h-5"></div>
            <div className="bg-white w-5 h-5"></div>
          </div>
        </div>
        <div className="border-2 border-gray-700 bg-white rounded-md mt-1 mx-2 p-4">
          <p className="flex items-center justify-end">
            {input.length == 0 ? "Enter something..." : showUser}
          </p>
        </div>
        <div className="grid grid-cols-4 text-center">
          {operations.map((ops) => (
            <div
              onClick={() => handleChange(ops)}
              className="p-3 m-2 border bg-white cursor-pointer rounded-sm"
              key={ops.value}
            >
              {ops.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
