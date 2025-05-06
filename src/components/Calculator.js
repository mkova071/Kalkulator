import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "+/-") {
      setInput((prev) => (prev ? String(-parseFloat(prev)) : ""));
    } else if (value === "=") {
      try {
        const sanitized = input.replace(",", ".");
        setInput(eval(sanitized).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ",", "="],
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.flat().map((btn, i) => (
          <button
            key={i}
            className={`btn ${
              ["/", "*", "-", "+", "="].includes(btn) ? "orange" : ""
            } ${btn === "0" ? "zero" : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
