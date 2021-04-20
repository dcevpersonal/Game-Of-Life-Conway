import React from "react";
import "./Button.scss";
interface props {
  onClick(): void;
  text: string;
}

function Button(props: props) {
  return (
    <button className="Button" id="Button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default React.memo(Button);
