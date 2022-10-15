import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Counter from "./Counter";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const incrementCounter1 = () => {
    setCount1((count1) => count1 + 1);
  };

  const incrementCounter3 = useCallback(() => {
    setCount3((count3) => count3 + 1);
  }, []);

  const incrementCounter4 = useCallback(() => {
    setCount4((count4) => count4 + 1);
  }, []);

  return (
    <>
      <button onClick={incrementCounter1}>Increase Counter 1</button>
      {/* When the state for count1 changes both COunter are called*/}
      <Counter value={count1}>Counter 1</Counter>
      <Counter value={count2}>Counter 2</Counter>
      {/*
        Count 3 and Count 4 also re-renders on incrementing Counter 1
        This is because incrementCounter 3 and incrementCOunter 4 are changed.
        useMemo compares the reference of the props but incrementCOunter 3 and 4 
        are created in memory again
      */}
      <Counter value={count3} onClick={incrementCounter3}>
        Counter 3
      </Counter>
      <Counter value={count4} onClick={incrementCounter4}>
        Counter 4
      </Counter>
    </>
  );
}

export default App;
