import React, { useState } from "react";
import { getTransactions, getTransactionsByQuery } from "../../api/transaction";
import "./SearchBar.scss";
import { MdDelete } from "react-icons/md";
import { useDebounce, useUpdateEffect } from "../../utils/hooks";

const attributes = [
  "amount",
  "particulars",
  "analysis_code",
  "serial_number",
  "branch",
];

const SearchBar = ({ transactions, setTransactions, setCurrentPage }) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [displayMsg, setDisplayMsg] = useState("");

  const debouncedSearchInput = useDebounce(searchInput, 500);

  const attributeSelectHandler = (e) => {
    setSelectedAttribute(e.target.value);
    setDisplayMsg("");
  };

  const searchInputHandler = (e) => {
    if (!selectedAttribute)
      return setDisplayMsg("please select an attribute first");
    return setSearchInput(e.target.value);
  };

  const clear = async () => {
    setSearchInput("");
    setSelectedAttribute("");
    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useUpdateEffect(() => {
    (async () => {
      try {
        const res = await getTransactionsByQuery({
          [selectedAttribute]: searchInput ? searchInput : null,
        });

        setTransactions(res.data);
        setCurrentPage(1);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [debouncedSearchInput]);

  return (
    <section className="search-bar">
      {displayMsg && <span className="search-bar__msg">{displayMsg}</span>}
      <select
        name="attribute"
        id="attribute"
        onChange={attributeSelectHandler}
        value={selectedAttribute}
      >
        <option value="">Select</option>
        {attributes.map((key) => {
          return (
            <option key={key} value={key}>
              {key.replace("_", " ")}
            </option>
          );
        })}
      </select>
      <div className="search-bar__search-content-wrapper">
        <input type="text" onChange={searchInputHandler} value={searchInput} />
        <div onClick={clear} className="btn">
          <MdDelete />
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
