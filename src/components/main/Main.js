import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import s from "./Main.module.css";
import { Route } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";

const Main = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Navbar />
      <div className={s.main}>
        <Route render={() => <Profile />} path="/profile" />
        <Route render={() => <DialogsContainer />} path="/dialogs" />
        <Route render={() => <UsersContainer />} path="/users" />
      </div>
    </div>
  );
};

export default Main;
