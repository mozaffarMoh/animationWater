import React from "react";
import Counter from "./components/Counter/Counter";
import Water from "./components/Water/Water";

function App() {
  const [nextIs, setNextIs] = React.useState("counter");

  return (
    <div className="app-template">
      {nextIs === "counter" && <Counter setNextIs={setNextIs} />}
      {nextIs === "water" && <Water setNextIs={setNextIs} />}
    </div>
  );
}

export default App;
