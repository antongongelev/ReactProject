import React from "react";
import Navbar from "../navbar/Navbar";
import ProfileContainer from "../profile/ProfileContainer";
import s from "./Main.module.css";
import { Route } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import HeaderContainer from "../header/HeaderContainer";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <HeaderContainer />
      <Navbar />
      <div className={s.main}>
        <Route render={() => <ProfileContainer />} path="/profile/:userId" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
      </div>
    </div>
  );
};

export default Main;
