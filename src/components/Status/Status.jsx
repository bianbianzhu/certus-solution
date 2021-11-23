import React from "react";
import { MdOutlineAddCircle, MdOutlineRemoveCircle } from "react-icons/md";
import "./Status.scss";

const Status = ({ type, multiply, amount, title, amountColor }) => {
  switch (type) {
    case "plus": {
      return (
        <div className="status status--plus">
          <MdOutlineAddCircle />
          <span>X{multiply}</span>
          <span style={{ marginLeft: "auto" }}>{amount}</span>
        </div>
      );
    }

    case "minus": {
      return (
        <div className="status status--minus">
          <MdOutlineRemoveCircle />
          <span>X{multiply}</span>
          <span style={{ marginLeft: "auto" }}>{amount}</span>
        </div>
      );
    }

    case "column": {
      return (
        <div className="status status--column">
          <span>{title}</span>
          <span style={{ color: amountColor }}>{amount}</span>
        </div>
      );
    }

    default:
      return (
        <div className="status">
          <span>{title}</span>
          <span style={{ color: amountColor }}>{amount}</span>
        </div>
      );
  }
};

export default Status;
