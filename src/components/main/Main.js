import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";
import Dialogs from "../dialogs/Dialogs";
import s from "./Main.module.css";
import {Route, BrowserRouter} from 'react-router-dom';

const Main = () => {
  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <Header />
        <Navbar />
        <div className={s.main}>
          <Route component={Profile} path="/profile" />
          <Route component={Dialogs} path="/dialogs" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Main;
