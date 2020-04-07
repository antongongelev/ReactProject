import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={s.navbar}>
      <div>
        <NavLink to={"/profile/" + props.myId} activeClassName={s.active}>
          My Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" activeClassName={s.active}>
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
