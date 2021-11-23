import React, { useState } from "react";
import CardHeader from "../CardHeader/CardHeader";
import "./SessionCard.scss";
import { MdExpandLess } from "react-icons/md";
import Status from "../../Status/Status";

const SessionCard = ({ minHeight }) => {
  const [cardHeight, setCardHeight] = useState();
  const [isIconRotated, setIsIconRotated] = useState(false);

  const toggleHeight = () => {
    if (cardHeight !== minHeight) {
      setCardHeight(minHeight);
      return;
    }

    return setCardHeight();
  };

  return (
    <div className="session-card" style={{ height: cardHeight }}>
      <CardHeader
        textContent="session"
        icon={<MdExpandLess />}
        isExpand={true}
        toggleHeight={toggleHeight}
        isIconRotated={isIconRotated}
        setIsIconRotated={setIsIconRotated}
      />
      <span className="session-card__sub-heading">Total Matched</span>
      <Status type="plus" multiply="7" amount="+868.43" />
      <Status type="minus" multiply="4" amount="-2149.29" />
      <Status amount="-1280.86" title="net amount" amountColor="#fcb596" />
      <span className="session-card__break"></span>
      <Status title="entries remaining" amount="59" />
      <Status title="amount remaining" amount="325,122.30" />
      <button className="btn btn--default">commit</button>
    </div>
  );
};

export default SessionCard;
