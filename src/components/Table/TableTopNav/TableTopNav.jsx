import React, { useState } from "react";
import CardHeader from "../../Cards/CardHeader/CardHeader";
import { MdExpandMore, MdSettings, MdOutlineFilterList } from "react-icons/md";
import Pagination from "../Pagination/Pagination";
import "./TableTopNav.scss";
import FilterModal from "../../FilterModal/FilterModal";

const TableTopNav = ({
  transactions,
  setCurrentPage,
  currentPage,
  transactionsPerPage,
  setTransactions,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="table-topNav">
      <div className="table-topNav__header-wrapper">
        <CardHeader
          textContent="matched"
          isExpand={true}
          icon={<MdExpandMore />}
          disabled={true}
        />
      </div>
      <Pagination
        transactions={transactions}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        transactionsPerPage={transactionsPerPage}
      />
      <button
        className="btn btn--icon"
        style={{ position: "relative", zIndex: "9" }}
      >
        <span
          style={{ position: "absolute", inset: "0" }}
          onClick={toggleShowModal}
        ></span>
        <MdOutlineFilterList />
        <FilterModal
          setShowModal={setShowModal}
          showModal={showModal}
          transactions={transactions}
          setTransactions={setTransactions}
          setCurrentPage={setCurrentPage}
        />
      </button>
      <button className="btn btn--icon">
        <MdSettings />
      </button>
    </div>
  );
};

export default TableTopNav;
