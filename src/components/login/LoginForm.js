import React from "react";
import { Field, reduxForm } from "redux-form";

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

export default reduxForm({ form: "login" })(LoginForm);
