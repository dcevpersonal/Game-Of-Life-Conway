import React, { useState, useCallback } from "react";
import Grid from "./Blocks/Grid";
import Button from "./Ui/Button";
import "./App.scss";

function App() {
  const setSimRun = useCallback(() => {
    setSimRunning((s) => {
      return s ? false : true;
    });
    setButtonText((s) => {
      return s === "Start" ? "Stop" : "Start";
    });
  }, []);

  const [simRunning, setSimRunning] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  return (
    <div className="App">
      <Button onClick={setSimRun} text={buttonText} />
      <Grid simRunning={simRunning} />
    </div>
  );
}

export default App;
