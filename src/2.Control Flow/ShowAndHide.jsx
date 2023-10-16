import { Show, createSignal } from "solid-js";

export function ShowAndHide() {
  const [showMessage, setShowMessage] = createSignal(false);
  return (
    <div>
      <Show when={showMessage()} fallback={<p>secret is hidden</p>}>
        <p>super secret is shown</p>
      </Show>
      <button onClick={() => setShowMessage(!showMessage())}>
        show secret
      </button>
    </div>
  );
}
