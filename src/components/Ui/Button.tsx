import React from "react";
import Style from "./Button.module.scss";
interface props {
  onClick(): void;
  text: string;
  id: string;
}

function Button(props: props) {
  return (
    <button className={Style.Button} id={props.id} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default React.memo(Button);
