import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");

  const incrementFunction = () => {
    setCount(count + 1);
  };
  const decrementFunction = () => {
    setCount(count - 1);
  };
  const colors = ["red", "green", "blue", "indigo", "orange", "pink"];
  const randomNumber = Math.floor(Math.random() * 5);

  const changeColor = () => {
    setColor(colors[randomNumber]);
  };
  return (
    <div className="counter">
      <p style={{ backgroundColor: `${color}` }}>
        {count} {color}
      </p>
      <button onClick={() => decrementFunction()}>-</button>
      <button onClick={() => changeColor()}>Change Color</button>
      <button onClick={() => incrementFunction()}>+</button>
    </div>
  );
};

export default Counter;
