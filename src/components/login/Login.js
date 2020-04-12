import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../reducers/auth-reducer";
import Preloader from "../tools/preloader/Preloader";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  if (props.authData.isAuthenticated) {
    return <Redirect to={`/profile/${props.authData.id}`} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      {props.authData.isLoading && <Preloader />}
      <LoginForm onSubmit={props.loginThunk} />
    </div>
  );
};

let mapStateToProps = (state) => ({ authData: state.authData });

export default connect(mapStateToProps, { loginThunk })(Login);
