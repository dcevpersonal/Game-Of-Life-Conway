import React, { useCallback } from "react";
import Square from "./Square";
import "./Row.scss";

interface props {
  iden: number;
  onMouseLeave(r: number, c: number): void;
  onMouseDown(r: number, c: number, v: number): void;
  onMouseUp(r: number, c: number): void;
  onClick(r: number, c: number): void;
  col: Array<number>;
}

function Row(props: props) {
  return (
    <tr className="Row">
      {props.col.map((e, i) => {
        return (
          <Square
            row={props.iden}
            col={i}
            key={`${props.iden}-${i}`}
            active={e}
            onMouseLeave={useCallback(props.onMouseLeave, [])}
            onMouseDown={useCallback(props.onMouseDown, [])}
            onMouseUp={useCallback(props.onMouseUp, [])}
            onClick={useCallback(props.onClick, [])}
          />
        );
      })}
    </tr>
  );
}

export default React.memo(Row);
