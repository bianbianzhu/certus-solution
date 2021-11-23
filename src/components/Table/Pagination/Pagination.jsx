import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Pagination.scss";

const Pagination = ({
  transactions,
  setCurrentPage,
  currentPage,
  transactionsPerPage,
}) => {
  const totalOfTransactions = transactions.length;
  const maxOfPage = Math.ceil(totalOfTransactions / transactionsPerPage);

  const prev = () => {
    if (currentPage <= 1) return;
    return setCurrentPage((c) => c - 1);
  };

  const next = () => {
    if (currentPage >= maxOfPage) return;
    return setCurrentPage((c) => c + 1);
  };
  return (
    <div className="pagination">
      <button
        className="btn btn--icon"
        onClick={prev}
        disabled={currentPage <= 1 ? true : false}
      >
        <MdChevronLeft />
      </button>
      <span className="pagination__range">
        {(currentPage - 1) * transactionsPerPage + 1}-
        {currentPage * transactionsPerPage}/
        {totalOfTransactions ? totalOfTransactions : "Many"}
      </span>
      <button
        className="btn btn--icon"
        onClick={next}
        disabled={currentPage >= maxOfPage ? true : false}
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
