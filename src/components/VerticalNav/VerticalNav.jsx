import React from "react";
import CardHeader from "../Cards/CardHeader/CardHeader";
import SessionCard from "../Cards/SessionCard/SessionCard";
import "./VerticalNav.scss";
import { MdModeEdit } from "react-icons/md";

const VerticalNav = ({ showVerticalNav }) => {
  return (
    <div
      className="vertical-nav"
      style={
        showVerticalNav
          ? { transform: "translateX(0)" }
          : { transform: "translateX(100%)" }
      }
    >
      <div className="vertical-nav__title">
        <CardHeader textContent="account" />
        <CardHeader icon={<MdModeEdit />} textContent="06-1034-0000225-00" />
      </div>
      <SessionCard minHeight="8%" />
    </div>
  );
};

export default VerticalNav;
