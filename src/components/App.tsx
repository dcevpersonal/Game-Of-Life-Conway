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

  const setSimReset = useCallback(() => {
    setSimReseting((s) => {
      return s ? false : true;
    });
  }, []);

  const [simRunning, setSimRunning] = useState(false);
  const [simReseting, setSimReseting] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  return (
    <div className="App">
      <Button onClick={setSimRun} text={buttonText} />
      <Button onClick={setSimReset} text="Reset" />
      <Grid simRunning={simRunning} simReseting={simReseting} />
    </div>
  );
}

export default App;
