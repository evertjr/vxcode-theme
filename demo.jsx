import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

export function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
  ]);

  const handleIncrement = (counter) => {
    const updatedCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    );
    setCounters(updatedCounters);
  };

  const handleDecrement = (counter) => {
    const updatedCounters = counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : c
    );
    setCounters(updatedCounters);
  };

  return (
    <div>
      <NavBar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </main>
    </div>
  );
}
