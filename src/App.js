import "./index.css";
import { useState } from "react";

const App = () => {

  let [counterValue, setCounterValue] = useState(0);

  const addValue = () => {
    //counterValue = counterValue + 1;
    setCounterValue(counterValue + 1);
    // console.log(counterValue);
    if (counterValue === 20) {
      console.log("this cannot go more than 20.");
      setCounterValue(counterValue)
    }
  }

  const subtractValue = () => {
    //counterValue = counterValue - 1;
    setCounterValue(counterValue - 1);
    // console.log(counterValue);
    if (counterValue === 0) {
      console.log("this cannot go down below 0.");
      setCounterValue(counterValue)
    }
  }

  return (
    <div>
      <button onClick={addValue}>Add</button>
      <h1>Counter Value : {counterValue}</h1>
      <button onClick={subtractValue}>Subtract</button>
    </div>
  );
}

export default App;
