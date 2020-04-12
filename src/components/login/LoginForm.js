import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, email } from "../../validators/validators";
import { Input } from "../tools/custom-elements/CustomForms";
import s from "../tools/custom-elements/Custom.module.css";

const LoginForm = (props) => {
  debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            name="email"
            placeholder="Email"
            component={Input}
            validate={[email, required]}
          />
        </div>
        <div>
          <Field
            name="password"
            placeholder="Password"
            component={Input}
            validate={[required]}
          />
        </div>
        <div>
          <Field name="rememberMe" type="checkbox" component="input" />
        </div>
        {props.error && <div className={s.commonError}>{props.error}</div>}
        <div>
          <button>Login</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
