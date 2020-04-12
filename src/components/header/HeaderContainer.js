import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  authoriseThunk,
  setCredentials,
  logoutThunk,
} from "../../reducers/auth-reducer";

const HeaderContainer = (props) => {
  return <Header logout={props.logoutThunk} {...props.authData} />;
};

let mapStateToProps = (state) => ({ authData: state.authData });

export default connect(mapStateToProps, {
  setCredentials,
  authoriseThunk,
  logoutThunk,
})(HeaderContainer);
