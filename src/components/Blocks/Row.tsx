import React, { useCallback } from "react";
import Square from "./Square";
import Style from "./Row.module.scss";

interface props {
  iden: number;
  onMouseLeave(r: number, c: number): void;
  onMouseDown(r: number, c: number, v: number): void;
  onMouseUp(r: number, c: number): void;
  col: Array<number>;
}

function Row(props: props) {
  return (
    <tr className={Style.Row}>
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
          />
        );
      })}
    </tr>
  );
}

export default React.memo(Row, (prev, next) => {
  return JSON.stringify(prev.col) === JSON.stringify(next.col);
});
