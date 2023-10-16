import { For } from "solid-js";

export function ForLoop() {
  const frameworks = ["Angular", "React", "Vue", "Solid"];
  return (
    <div>
      <h3>For loop</h3>
      <For each={frameworks}>
        {(cat, i) => (
          <li>
            {i() + 1}. {cat}
          </li>
        )}
      </For>
    </div>
  );
}
