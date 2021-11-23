import React from "react";

import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import "./UnmatchedRows.scss";

const UnmatchedRows = ({
  transactions,
  loading,
  allTransactions,
  setTransactions,
}) => {
  if (loading)
    return (
      <div
        className="unmatched-rows unmatched-rows--loading"
        style={{ backgroundColor: "red" }}
      ></div>
    );

  return (
    <table className="unmatched-rows">
      <TableHeader
        allTransactions={allTransactions}
        setTransactions={setTransactions}
      />
      <tbody>
        {transactions.map((transaction) => {
          return <TableRow transaction={transaction} key={transaction._id} />;
        })}
      </tbody>
    </table>
  );
};

export default UnmatchedRows;
