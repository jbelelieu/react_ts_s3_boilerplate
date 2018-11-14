import * as React from "react";
import { useState } from "react";
import { render } from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(event.currentTarget.title === "decrement" ? count - 1 : count + 1);
  };
  return (
    <div>
      <button title="decrement" onClick={handleClick}>
        -
      </button>
      {count}
      <button title="increment" onClick={handleClick}>
        +
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
