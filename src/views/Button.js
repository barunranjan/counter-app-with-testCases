import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <div data-test="button-test">
      <button className="btn btn-primary">Click</button>
    </div>
  );
};

export default Button;
