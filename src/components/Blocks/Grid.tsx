import React, { useState, useCallback, useRef, useEffect } from "react";
import produce from "immer";
import Row from "./Row";
import "./Grid.scss";

interface props {
  simRunning: boolean;
  simReseting: boolean;
  simRandom: boolean;
}

function Grid(props: props) {
  //Initial Setup
  const row = Math.floor((window.innerHeight - 80) / 27);
  const col = Math.floor(window.innerWidth / 27);

  // const row = 15;
  // const col = 15;

  const operations = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  //Methods
  const generateEmptyArray = () => {
    const rows = [];
    for (let i = 0; i < row; i++) {
      rows.push(Array.from(Array(col), () => 0));
    }
    return rows;
  };

  const setSquare = useCallback((r: number, c: number) => {
    setGrid((g) => {
      return produce(g, (newGrid) => {
        if (mouseHoldRef.current) {
          newGrid[r][c] = holdingValueRef.current === 1 ? 0 : 1;
        } else {
          newGrid[r][c] = g[r][c] === 1 ? 0 : 1;
        }
      });
    });
  }, []);

  //Events
  const setMouseDown = useCallback((r: number, c: number, v: number) => {
    setMouseHold(true);
    setHoldingValue(v);
  }, []);

  const setMouseUp = useCallback((r: number, c: number) => {
    setMouseHold(false);
    setSquare(r, c);
  }, []);

  const setMouseLeave = useCallback((r: number, c: number) => {
    if (mouseHoldRef.current) {
      setSquare(r, c);
    }
  }, []);

  //Controls
  const startSimulation = () => {
    if (simRunningRef.current) {
      setGrid((g) => {
        return produce(g, (newGrid) => {
          for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
              let neighbors = 0;
              operations.forEach((o) => {
                if (g[r + o[0]] !== undefined && g[r + o[0]][c + o[1]] === 1) {
                  neighbors++;
                }
              });

              if (neighbors < 2 || neighbors > 3) {
                newGrid[r][c] = 0;
              } else if (neighbors === 3) {
                newGrid[r][c] = 1;
              }
            }
          }
          setStepsCounter((s) => {
            return s++;
          });
        });
      });
      setTimeout(startSimulation, 600);
    }
  };

  const resetGrid = () => {
    setGrid(() => {
      return generateEmptyArray();
    });
  };

  const generateRandomGrid = () => {
    resetGrid();
    setGrid((g) => {
      return produce(g, (newGrid) => {
        for (let i = Math.floor(Math.random() * row); i < row; i++) {
          console.log("Row:" + i);

          for (let i = Math.floor(Math.random() * col); i < col; i++) {
            console.log("Col:" + i);
            newGrid[Math.floor(Math.random() * row)][
              Math.floor(Math.random() * col)
            ] = Math.floor(Math.random() * 2);
          }
        }
      });
    });
  };

  //States
  const [grid, setGrid] = useState(() => {
    return generateEmptyArray();
  });

  const [mouseHold, setMouseHold] = useState(false);

  const mouseHoldRef = useRef(mouseHold);
  mouseHoldRef.current = mouseHold;

  const [holdingValue, setHoldingValue] = useState(0);

  const holdingValueRef = useRef(holdingValue);
  holdingValueRef.current = holdingValue;

  const simRunningRef = useRef(props.simRunning);
  simRunningRef.current = props.simRunning;

  const [stepsCounter, setStepsCounter] = useState(0);
  const stepsCounterRef = useRef(stepsCounter);
  stepsCounterRef.current = stepsCounter;

  const [firstRender, setFirstRender] = useState(true);
  const firstRenderRef = useRef(firstRender);
  firstRenderRef.current = firstRender;

  //Effects
  useEffect(() => {
    startSimulation();
  }, [props.simRunning]);

  useEffect(() => {
    resetGrid();
  }, [props.simReseting]);

  useEffect(() => {
    if (firstRenderRef.current) {
      setFirstRender(false);
    } else {
      generateRandomGrid();
    }
  }, [props.simRandom]);

  return (
    <table className="Grid">
      <tbody>
        {grid.map((e, i) => {
          return (
            <Row
              col={e}
              key={i}
              iden={i}
              onMouseLeave={setMouseLeave}
              onMouseDown={setMouseDown}
              onMouseUp={setMouseUp}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Grid;
