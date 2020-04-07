import React from "react";
import ProfileContainer from "../profile/ProfileContainer";
import s from "./Main.module.css";
import { Route } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import NavbarContainer from "../navbar/NavbarContainer";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <HeaderContainer />
      <NavbarContainer />
      <div className={s.main}>
        <Route render={() => <ProfileContainer />} path="/profile/:userId" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
        <Route render={() => <Login />} path="/login" />
      </div>
    </div>
  );
};

export default Main;
