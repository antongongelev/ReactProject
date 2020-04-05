import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <div className={s.header}>
      <div className={s.login}>
        {props.isAuthenticated ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      <img
        src="https://assets-global.website-files.com/5b97a7fe64609f71d4504d3e/5b97a7fe64609ffdd6504de9_Utomik-Ninja-Logo.png"
        alt="title"
      />
    </div>
  );
};

export default Header;
