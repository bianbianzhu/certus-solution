import React, { useState } from "react";
import "./TableRow.scss";
import { MdDescription } from "react-icons/md";
import { useWindowDimensions } from "../../../utils/hooks";

const TableRow = ({ transaction }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { width } = useWindowDimensions();
  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  console.log(width);
  return (
    <tr
      className="table-row"
      onClick={toggleSelection}
      style={
        isSelected
          ? transaction.amount < 0
            ? { backgroundColor: "#f6e3e6" }
            : { backgroundColor: "#e7f6e2" }
          : {}
      }
    >
      {Object.keys(transaction).map((key) => {
        if (width >= 900) {
          if (key === "_id") return null;
          if (key === "amount" && transaction[key] >= 0)
            return (
              <td key={transaction[key]} style={{ color: "#60ab4d" }}>
                +{transaction[key]}
              </td>
            );
          if (key === "amount")
            return (
              <td key={transaction[key]} style={{ color: "#c9505c" }}>
                {transaction[key]}
              </td>
            );

          if (key === "notes")
            if (transaction[key]) {
              return (
                <td
                  key={transaction[key]}
                  style={{
                    color: "#7eb0cc",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                >
                  <MdDescription />
                </td>
              );
            } else {
              //This is also a trick: as table-row's height cannot be set easily. If the td is empty, the whole row will shrink a bit.
              //hide some text (no events can occur) without collapse the space :D
              //======5mins later===========AND this is not working, cause if I select the row, the background color of the entire row shall change
              //However because this td is hidden, it's not gonna show
              //simple make the text transparent
              return (
                <td
                  key={transaction[key]}
                  style={{ color: "transparent", fontSize: "1.8rem" }}
                >
                  None
                </td>
              );
            }

          return <td key={transaction[key]}>{transaction[key]}</td>;
        } else {
          if (key === "_id") return null;
          if (key === "notes") return null;
          if (key === "serial_number") return null;
          if (key === "analysis_code") return null;
          if (key === "branch") return null;
          if (key === "reference") return null;
          if (key === "other_party") return null;
          if (key === "amount" && transaction[key] >= 0)
            return (
              <td key={transaction[key]} style={{ color: "#60ab4d" }}>
                +{transaction[key]}
              </td>
            );
          if (key === "amount")
            return (
              <td key={transaction[key]} style={{ color: "#c9505c" }}>
                {transaction[key]}
              </td>
            );

          return <td key={transaction[key]}>{transaction[key]}</td>;
        }
      })}
    </tr>
  );
};

export default TableRow;
