import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Introduction } from "./1. Introduction/Introduction";
import { ControlFlow } from "./2.Control Flow/ControlFlow";

function App() {
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} class="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://solidjs.com" target="_blank">
  //         <img src={solidLogo} class="logo solid" alt="Solid logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + Solid</h1>
  //     <div class="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count()}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p class="read-the-docs">
  //       Click on the Vite and Solid logos to learn more
  //     </p>
  //   </>
  // )
  return (
    <>
      <Introduction />
      <ControlFlow />
    </>
  );
}

export default App;
