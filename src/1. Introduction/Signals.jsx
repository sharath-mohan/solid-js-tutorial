import { createSignal } from "solid-js";

export function Signals() {
  const [count, setCount] = createSignal(0);
  setInterval(() => {
    setCount(count() + 1);
  }, 1000);
  return <div>Signal {count()}</div>;
}
