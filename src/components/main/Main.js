import React from "react";
import ProfileContainer from "../profile/ProfileContainer";
import s from "./Main.module.css";
import { Route } from "react-router-dom";
import DialogsContainer from "../dialogs/DialogsContainer";
import UsersContainer from "../users/UsersContainer";
import HeaderContainer from "../header/HeaderContainer";
import Login from "../login/Login";
import NavbarContainer from "../navbar/NavbarContainer";
import { connect } from "react-redux";
import { initialize } from "../../reducers/app-reducer";
import Preloader from "../tools/preloader/Preloader";

class Main extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.appData.isInitialized) {
      return <Preloader />;
    }
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
  }
}

const mapStateToProps = (state) => ({
  appData: state.appData,
});

export default connect(mapStateToProps, { initialize })(Main);
