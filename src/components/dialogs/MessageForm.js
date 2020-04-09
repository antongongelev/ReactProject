import React from "react";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="message" plaseholder="Type here..." component="input" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "message" })(MessageForm);
