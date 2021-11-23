import React from "react";
import "./AppBar.scss";
import userAvatarImg from "../../assets/images/user.jpg";

const AppBar = () => {
  return (
    <div className="appbar">
      <span className="logo">certus.</span>
      <img src={userAvatarImg} alt="user-avatar" className="appbar__avatar" />
    </div>
  );
};

export default AppBar;
