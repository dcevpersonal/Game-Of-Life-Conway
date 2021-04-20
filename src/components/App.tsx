import React, { useState, useCallback, useRef } from "react";
import DisplayPanel from "./Ui/Display-Panel";
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
      console.log(s);

      return s ? false : true;
    });
  }, []);

  const setSimSpeed = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setSimSpeedometer(event.currentTarget.valueAsNumber);
    },
    []
  );

  const addStepsCounter = useCallback(() => {
    setStepsCounter(stepsCounterRef.current + 1);
  }, []);

  const resetStepsCounter = useCallback(() => {
    setStepsCounter(0);
  }, []);

  const [simRunning, setSimRunning] = useState(false);
  const [simReseting, setSimReseting] = useState(false);
  const [simRandom, setSimRandomize] = useState(false);
  const [simSpeedometer, setSimSpeedometer] = useState(600);
  const [buttonText, setButtonText] = useState("Start");
  const [stepsCounter, setStepsCounter] = useState(0);
  const stepsCounterRef = useRef(stepsCounter);
  stepsCounterRef.current = stepsCounter;

  return (
    <div className="App">
      <DisplayPanel
        setSimSpeed={setSimSpeed}
        simSpeedometer={simSpeedometer}
        stepsCounter={stepsCounter}
      />
      <Grid
        simRunning={simRunning}
        simReseting={simReseting}
        simRandom={simRandom}
        simSpeedometer={simSpeedometer}
        addStepsCounter={addStepsCounter}
        resetStepsCounter={resetStepsCounter}
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
