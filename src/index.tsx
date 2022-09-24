
import { render } from "solid-js/web";
import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";

function App() {
  return (
    <>
      <h1>Welcome to Counter App</h1>
      <Counter />
    </>
  );
}

render(
  () => (
    <CounterProvider>
      <App />
    </CounterProvider>
  ),
  document.getElementById("root") as HTMLElement
);
