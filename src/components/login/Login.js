import React from "react";
import { connect } from "react-redux";
import { loginThunk } from "../../reducers/auth-reducer";
import Preloader from "../tools/preloader/Preloader";
import LoginForm from "./LoginForm";

const Login = (props) => {
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
