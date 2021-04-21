import React from "react";
import Style from "./CopyRight-Panel.module.scss";
import Text from "./Text";

interface props {
  id: string;
}

function CopyRightPanel(props: props) {
  return (
    <div className={Style.CopyRightPanel} id={props.id}>
      <Text
        text={"© Daniel Lane (Lazarev) - " + new Date().getFullYear()}
        id={Style.Text}
      />
    </div>
  );
}

export default React.memo(CopyRightPanel);
