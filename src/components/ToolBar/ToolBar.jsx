import React from "react";
import Status from "../Status/Status";
import "./ToolBar.scss";

const ToolBar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__status-wrapper">
        <Status type="plus" multiply="3" />
        <Status type="minus" multiply="1" />
        <Status
          type="column"
          amount="+377.45"
          title="total"
          amountColor="#60ab4d"
        />
      </div>
      <span></span>
      <Status
        type="column"
        amount="-1658.31"
        title="session remainder"
        amountColor="#fcb596"
      />
      <span></span>
      <button className="btn btn--default">unmatch</button>
    </div>
  );
};

export default ToolBar;
