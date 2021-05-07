import React from "react";
import Style from "./Square.module.scss";

interface props {
  row: number;
  col: number;
  onMouseLeave(r: number, c: number): void;
  onMouseDown(r: number, c: number, v: number): void;
  onMouseUp(r: number, c: number): void;
  active: number;
}

function Square(props: props) {
  return (
    <td
      className={
        props.active === 1
          ? `${Style.Square} ${Style.Square__Active}`
          : Style.Square
      }
      key={`${props.row}-${props.col}`}
      onMouseLeave={() => {
        props.onMouseLeave(props.row, props.col);
      }}
      onMouseDown={() => {
        props.onMouseDown(props.row, props.col, props.active);
      }}
      onMouseUp={() => {
        props.onMouseUp(props.row, props.col);
      }}
    ></td>
  );
}

export default React.memo(Square);
