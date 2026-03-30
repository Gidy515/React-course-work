import { useState } from "react";
import "./index.css";

function App() {
  const [stepNum, setStepNum] = useState(1);
  const [countNum, setCountNum] = useState(0);

  function handlePrevSteps() {
    if (stepNum >= 1) {
      setStepNum((stepNum) => stepNum - 1);
    } else {
    }
  }

  function handleNextSteps() {
    setStepNum((stepNum) => stepNum + 1);
    setStepNum((stepNum) => stepNum + 1);
  }

  function handleAddCount() {
    if (stepNum >= 1) {
      setCountNum((count) => count + stepNum);
    }
  }

  function handleSubtractCount() {
    if (countNum >= 1) {
      setCountNum((count) => count - stepNum);
    } else {
    }
  }

  return (
    <div className="steps">
      <div>
        <button onClick={handlePrevSteps}>-</button>
        <h3>Step {stepNum}</h3>
        <button onClick={handleNextSteps}>+</button>
      </div>

      <div className="counts">
        <button onClick={handleSubtractCount}>-</button>
        <h3>Count {countNum}</h3>
        <button onClick={handleAddCount}>+</button>
      </div>
    </div>
  );
}

export default App;
