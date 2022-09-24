import { createContext, ParentProps } from "solid-js";
import { createStore } from "solid-js/store";

interface CounterState {
  counter: number;
}

interface Actions {
  increment?(): void;
  decrement?(): void;
}

const initialState: CounterState = {
  counter: 0,
};

export const CounterContext = createContext<[CounterState, Actions]>([initialState,{}]);

export function CounterProvider(props: ParentProps) {
  const [state, setState] = createStore<CounterState>(initialState);
  const store: [CounterState, Actions] = [
    state,
    {
      increment() {
        setState((c) => ({ counter: c.counter + 1 }));
      },
      decrement() {
        setState((c) => ({ counter: c.counter - 1 }));
      },
    },
  ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
}