import React, { useState } from "react";
import { FaCalculator } from "react-icons/fa";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(0);

  const handleAdd = () => {
    setResult(parseInt(input1) + parseInt(input2));
  };

  const handleSubtract = () => {
    setResult(parseInt(input1) - parseInt(input2));
  };

  const handleMultiply = () => {
    setResult(parseInt(input1) * parseInt(input2));
  };

  const handleDivide = () => {
    setResult(parseInt(input1) / parseInt(input2));
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setResult(0);
  };

  const handleInput1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInput2(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 shadow-md rounded-lg">
      <div className="flex items-center justify-center mb-5">
        <FaCalculator className="text-2xl mr-2 text-blue-500" />
        <h2 className="text-2xl font-semibold">Calculator</h2>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Enter first number"
            value={input1}
            onChange={handleInput1}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Enter second number"
            value={input2}
            onChange={handleInput2}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAdd}
          >
            +
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleSubtract}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleMultiply}
          >
            *
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={handleDivide}
          >
            /
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="text-lg font-medium">Result:</h4>
        <input
          type="text"
          value={result}
          readOnly
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Calculator;
