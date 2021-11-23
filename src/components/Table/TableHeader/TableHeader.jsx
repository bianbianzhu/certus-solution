import React from "react";
import "./TableHeader.scss";
import HeaderItem from "./HeaderItem/HeaderItem";
import { useWindowDimensions } from "../../../utils/hooks";

let headerAttributes = [
  "amount",
  "date",
  "other party",
  "particulars",
  "analysis code",
  "reference",
  "serial number",
  "branch",
  "notes",
];

const TableHeader = ({ allTransactions, setTransactions }) => {
  const { width } = useWindowDimensions();

  if (width <= 900) {
    headerAttributes = ["amount", "date", "particulars"];
  } else {
    headerAttributes = [
      "amount",
      "date",
      "other party",
      "particulars",
      "analysis code",
      "reference",
      "serial number",
      "branch",
      "notes",
    ];
  }

  return (
    <thead className="table-header">
      <tr>
        {headerAttributes.map((headerAttribute, index) => {
          return (
            <HeaderItem
              headerAttribute={headerAttribute}
              key={index}
              allTransactions={allTransactions}
              setTransactions={setTransactions}
            />
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
