import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginThunk } from "../../reducers/auth-reducer";
import Preloader from "../tools/preloader/Preloader";

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      {props.authData.isLoading && <Preloader />}
      <ReduxLoginForm onSubmit={props.loginThunk} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field name="email" placeholder="Email" component="input" />
        </div>
        <div>
          <Field name="password" placeholder="Password" component="input" />
        </div>
        <div>
          <Field name="rememberMe" type="checkbox" component="input" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

let mapStateToProps = (state) => ({ authData: state.authData });

export default connect(mapStateToProps, { loginThunk })(Login);
