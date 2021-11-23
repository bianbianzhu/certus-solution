import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar/AppBar";
import TableTopNav from "../components/Table/TableTopNav/TableTopNav";
import UnmatchedRows from "../components/Table/UnmatchedRows/UnmatchedRows";
import ToolBar from "../components/ToolBar/ToolBar";
import VerticalNav from "../components/VerticalNav/VerticalNav";
import { getTransactions } from "../api/transaction";
import "./MatchedPage.scss";
import { currentPageItemsGenerator } from "../utils/pagination";
import { MdChevronLeft } from "react-icons/md";
import { useWindowDimensions } from "../utils/hooks";

const MatchedPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage, setTransactionPerPage] = useState(10);
  const [showVerticalNav, setShowVerticalNav] = useState(true);
  const { width } = useWindowDimensions();

  //Get all transactions after the page mounts (didMount)
  useEffect(() => {
    // USE this if anything goes wrong
    // getTransactions()
    //   .then((res) => {
    //     setTransactions(res.data);
    //     console.log(transactions);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    //self-invoking
    (async () => {
      setLoading(true);
      try {
        const res = await getTransactions();
        setTransactions(res.data);

        //fake the loading time, as json-server is too fast
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (width <= 1000) {
      setShowVerticalNav(false);
    } else {
      setShowVerticalNav(true);
    }
  }, [width]);

  //Get the current Page (for pagination)
  const currentPageTransactions = currentPageItemsGenerator(
    transactions,
    currentPage,
    transactionsPerPage
  );

  const toggleVerticalNav = () => {
    setShowVerticalNav(!showVerticalNav);
  };

  return (
    <div className="matched-page">
      <AppBar />
      <div className="matched-page__main-wrapper">
        <div className="matched-page__table-wrapper">
          <TableTopNav
            transactions={transactions}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            transactionsPerPage={transactionsPerPage}
            setTransactions={setTransactions}
          />
          <UnmatchedRows
            transactions={currentPageTransactions}
            allTransactions={transactions}
            setTransactions={setTransactions}
            loading={loading}
          />
          <ToolBar />
        </div>
        <VerticalNav showVerticalNav={showVerticalNav} />
      </div>
      <button className="btn btn--floating-action" onClick={toggleVerticalNav}>
        <MdChevronLeft
          style={
            showVerticalNav
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </button>
    </div>
  );
};

export default MatchedPage;
