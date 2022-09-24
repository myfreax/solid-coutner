import { useContext } from "solid-js";
import { CounterContext } from "./CounterContext";

export default function Counter() {
  const [counterState, { increment, decrement }] = useContext(CounterContext);
  return (
    <>
      <div>{counterState.counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
