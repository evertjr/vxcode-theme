import Button from ".Button";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <Button type="button" onClick={handleClick}>
        Current count: {count}
      </Button>
    </main>
  );
}
