import React from "react";
import "./Text.scss";

interface props {
  text: string;
}

function Text(props: props) {
  return (
    <h1 className="Text" id="Text">
      {props.text}
    </h1>
  );
}

export default React.memo(Text);
