import React from "react";

const CounterDisplay = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        The current count is <span>{props.count}</span>
      </h1>
    </div>
  );
};

export default CounterDisplay;
