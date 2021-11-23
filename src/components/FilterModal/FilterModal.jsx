import React, { useState } from "react";
import styled from "styled-components";
import { getTransactions, getTransactionsByQuery } from "../../api/transaction";
import { filterUniqueValue } from "../../utils/filterArray";
import SearchBar from "../SearchBar/SearchBar";
import "./FilterModal.scss";

const StyledModal = styled.form`
  position: absolute;
  width: 30rem;
  aspect-ratio: 1;
  top: 200%;
  left: 50%;
  transform: translate(-50%);
  background: #f6f6f6;
  box-shadow: 0 0.4rem 0.3rem rgba(0, 47, 107, 0.1);
  z-index: 10;
`;

const FilterModal = ({
  showModal,
  setShowModal,
  transactions,
  setTransactions,
  setCurrentPage,
}) => {
  const [filterAmount, setFilterAmount] = useState();
  const [filterDate, setFilterDate] = useState();
  const [formatedDate, setFormatedDate] = useState();
  const [formatedOtherParty, setFormatedOtherPary] = useState();
  const [filterOtherParty, setFilterOtherParty] = useState();
  const [filterParticular, setFilterParticular] = useState();

  let particularsArray = [];

  transactions.forEach((transaction) => {
    particularsArray.push(transaction.particulars);
  });

  const filteredParticulars = filterUniqueValue(particularsArray);

  const selectInputHandler = (e) => {
    setFilterParticular(e.target.value);
  };

  const amountInputHandler = (e) => {
    setFilterAmount(e.target.value);
  };

  const dateInputHandler = (e) => {
    const rawDate = e.target.value;
    setFilterDate(rawDate);
    const formattedDate = new Date(rawDate).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
    setFormatedDate(formattedDate);
  };

  const otherPartyInputHandler = (e) => {
    const rawDate = e.target.value;
    setFormatedOtherPary(rawDate);
    const formattedDate = new Date(rawDate)
      .toLocaleDateString("en-AU", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .replaceAll(" ", "-"); //ES6 new feature???
    setFilterOtherParty(formattedDate);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await getTransactionsByQuery({
        amount: filterAmount ? filterAmount : null,
        particulars: filterParticular ? filterParticular : null,
        //unfortunately, the format of the date in db "08/05/2021" is gonna screw everything up, as axios will make a query like date=08%2F05%2F2021
        //use paramsSerializer to solve this problem if I have time
        date: formatedDate ? formatedDate : null,
        other_party: filterOtherParty ? filterOtherParty : null,
      });

      setTransactions(res.data);
      setCurrentPage(1);
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  const clear = async () => {
    setFilterDate();
    setFilterAmount("");
    setFilterParticular("");
    setFilterOtherParty("");
    setFormatedDate("");
    setFormatedOtherPary("");

    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {showModal && (
        <StyledModal onSubmit={formSubmitHandler} className="filter-model">
          <section className="filter-model__section">
            <label htmlFor="filter-amount" className="filter-model__title">
              {/* amount: {filterAmount ? filterAmount : 0} */}
              amount
            </label>
            <input
              type="number"
              className="filter-model__input"
              id="filter-amount"
              name="filter-amount"
              min="-1500"
              max="1500"
              step=".01"
              onChange={amountInputHandler}
              value={filterAmount}
            />
          </section>
          {/* <section className="filter-model__section">
            <label htmlFor="filter-date" className="filter-model__title">
              date
            </label>
            <input
              type="date"
              className="filter-model__input"
              id="filter-date"
              name="filter-date"
              onChange={dateInputHandler}
              value={filterDate}
            />
          </section> */}
          <section className="filter-model__section">
            <label htmlFor="filter-other-party" className="filter-model__title">
              other party
            </label>
            <input
              type="date"
              className="filter-model__input"
              id="filter-other-party"
              name="filter-other-party"
              onChange={otherPartyInputHandler}
              value={formatedOtherParty}
            />
          </section>
          <section className="filter-model__section">
            <label htmlFor="filter-particulars" className="filter-model__title">
              particulars
            </label>
            <select
              className="filter-model__select"
              id="filter-particulars"
              name="filter-particulars"
              onChange={selectInputHandler}
              value={filterParticular}
            >
              <option value="">Particulars</option>
              {filteredParticulars.map((particular) => {
                return (
                  <option value={particular} key={particular}>
                    {particular}
                  </option>
                );
              })}
            </select>
          </section>
          <section className="filter-model__section">
            <input className="btn btn--default" type="submit" value="Filter" />

            <div className="btn btn--default" onClick={clear}>
              Clear
            </div>
          </section>
          <span className="filter-model__break"></span>
          <SearchBar
            transactions={transactions}
            setTransactions={setTransactions}
            setCurrentPage={setCurrentPage}
          />
        </StyledModal>
      )}
    </>
  );
};

export default FilterModal;
