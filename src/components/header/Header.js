import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <img
        src="https://assets-global.website-files.com/5b97a7fe64609f71d4504d3e/5b97a7fe64609ffdd6504de9_Utomik-Ninja-Logo.png"
        alt="title"
      />
    </div>
  );
};

export default Header;
