import React, { useState, useCallback } from "react";
import Grid from "./Blocks/Grid";
import ControlsPanel from "./Ui/Control-Panel";
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

  const setSimRandom = useCallback(() => {
    setSimRandomize((s) => {
      return s ? false : true;
    });
  }, []);

  const [simRunning, setSimRunning] = useState(false);
  const [simReseting, setSimReseting] = useState(false);
  const [simRandom, setSimRandomize] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  return (
    <div className="App">
      <Grid
        simRunning={simRunning}
        simReseting={simReseting}
        simRandom={simRandom}
      />
      <ControlsPanel
        setSimRandom={setSimRandom}
        setSimReset={setSimReset}
        setSimRun={setSimRun}
        Button_Text_1={buttonText}
      />
    </div>
  );
}

export default App;
