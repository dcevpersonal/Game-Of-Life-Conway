import React from "react";
import "./Text.scss";

interface props {
  text: string;
  id: string;
}

function Text(props: props) {
  return (
    <h1 className="Text" id={props.id} title={props.text}>
      {props.text}
    </h1>
  );
}

export default React.memo(Text);
