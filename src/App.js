import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [waring, setWarning] = useState(false);

  const increaseCount = () => {
    setCount((preCount) => preCount + 1);
    if (count >= 0) setWarning(false);
  };
  const decereaseCount = () => {
    if (count > 0) setCount(count - 1);
    if (count === 0) setWarning(true);

    console.log(count);
  };

  return (
    <div className="App" data-test="app-test">
      <div>
        <h1 data-test="counter-display-test">
          Currnet count is :<span data-test="count">{count}</span>
        </h1>
      </div>
      <div>
        {waring && (
          <span className="text-danger" data-test="test-warning">
            Count can not be below zero
          </span>
        )}
      </div>
      <div className="mx-5">
        <button
          data-test="button-increase-test"
          className="btn btn-primary ml-5"
          onClick={increaseCount}
        >
          Increase
        </button>
        <button
          data-test="button-decerease-test"
          className="btn btn-danger ml-5"
          onClick={decereaseCount}
        >
          Decerease
        </button>
      </div>
    </div>
  );
}

export default App;
