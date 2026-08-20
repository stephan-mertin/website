import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button className="counter" onClick={() => setCount((value) => value + 1)}>
      React island clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
}
