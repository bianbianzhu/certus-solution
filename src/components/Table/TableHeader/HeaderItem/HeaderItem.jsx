import React, { useState } from "react";
import {
  sortAmountAscending,
  sortAmountDescending,
  sortDateAscending,
  sortDateDescending,
  sortTextV2A,
  sortTextA2V,
} from "../../../../utils/sortArray";
import { MdArrowDropDown } from "react-icons/md";
import { getTransactions } from "../../../../api/transaction";

const HeaderItem = ({ headerAttribute, allTransactions, setTransactions }) => {
  const [sortStatus, setSortStatus] = useState("default");

  const fetchData = async () => {
    try {
      const res = await getTransactions();
      setTransactions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const sortClickHandler = (type) => {
    switch (type) {
      case "amount": {
        if (sortStatus === "default") {
          const sortedTransactions = sortAmountDescending(
            allTransactions,
            "amount"
          );
          setTransactions(sortedTransactions);
          setSortStatus("descending");
          break;
        }

        if (sortStatus === "descending") {
          const sortedTransactions = sortAmountAscending(
            allTransactions,
            "amount"
          );
          setTransactions(sortedTransactions);
          setSortStatus("ascending");
          break;
        }

        if (sortStatus === "ascending") {
          fetchData();
          setSortStatus("default");
          break;
        }

        break;
      }

      case "date": {
        if (sortStatus === "default") {
          const sortedTransactions = sortDateDescending(
            allTransactions,
            "date"
          );
          setTransactions(sortedTransactions);
          setSortStatus("descending");
          break;
        }

        if (sortStatus === "descending") {
          const sortedTransactions = sortDateAscending(allTransactions, "date");
          setTransactions(sortedTransactions);
          setSortStatus("ascending");
          break;
        }

        if (sortStatus === "ascending") {
          fetchData();
          setSortStatus("default");
          break;
        }

        break;
      }

      case "other party": {
        if (sortStatus === "default") {
          const sortedTransactions = sortDateDescending(
            allTransactions,
            "other_party"
          );
          setTransactions(sortedTransactions);
          setSortStatus("descending");
          break;
        }

        if (sortStatus === "descending") {
          const sortedTransactions = sortDateAscending(
            allTransactions,
            "other_party"
          );
          setTransactions(sortedTransactions);
          setSortStatus("ascending");
          break;
        }

        if (sortStatus === "ascending") {
          fetchData();
          setSortStatus("default");
          break;
        }

        break;
      }

      case "particulars": {
        if (sortStatus === "default") {
          const sortedTransactions = sortTextV2A(
            allTransactions,
            "particulars"
          );
          setTransactions(sortedTransactions);
          setSortStatus("descending");
          break;
        }

        if (sortStatus === "descending") {
          const sortedTransactions = sortTextA2V(
            allTransactions,
            "particulars"
          );
          setTransactions(sortedTransactions);
          setSortStatus("ascending");
          break;
        }

        if (sortStatus === "ascending") {
          fetchData();
          setSortStatus("default");
          break;
        }

        break;
      }

      case "reference": {
        if (sortStatus === "default") {
          const sortedTransactions = sortDateDescending(
            allTransactions,
            "reference"
          );
          setTransactions(sortedTransactions);
          setSortStatus("descending");
          break;
        }

        if (sortStatus === "descending") {
          const sortedTransactions = sortDateAscending(
            allTransactions,
            "reference"
          );
          setTransactions(sortedTransactions);
          setSortStatus("ascending");
          break;
        }

        if (sortStatus === "ascending") {
          fetchData();
          setSortStatus("default");
          break;
        }

        break;
      }

      default:
        return;
    }
  };

  //   const myArray = [
  //     { id: 1, date: "retail_dr" },
  //     { id: 2, date: "retail_cr" },
  //     { id: 3, date: "retail_dr" },
  //     { id: 4, date: "retail_cr" },
  //     { id: 5, date: "retail_er" },
  //   ];

  //   const mysorted = sortTextDescending(myArray, "date");

  //   console.log(mysorted);

  return (
    <th>
      <div
        className="table-header__item"
        onClick={() => {
          sortClickHandler(headerAttribute);
        }}
      >
        <MdArrowDropDown
          style={
            sortStatus !== "default"
              ? sortStatus === "ascending"
                ? { transform: "rotate(270deg" }
                : { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
        <span>{headerAttribute}</span>
      </div>
    </th>
  );
};

export default HeaderItem;
