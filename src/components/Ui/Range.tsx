import React from "react";
import "./Range.scss";

interface props {
  onChange(event: React.FormEvent<HTMLInputElement>): void;
}

function Range(props: props) {
  return (
    <input
      id="Range"
      type="range"
      min="100"
      max="1000"
      className="Range"
      onChange={props.onChange}
      defaultValue="600"
      step="100"
    />
  );
}

export default React.memo(Range);
