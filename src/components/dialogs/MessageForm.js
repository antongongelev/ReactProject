import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../validators/validators";
import { Textarea } from "../tools/custom-elements/CustomForms";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="message"
          plaseholder="Type here..."
          component={Textarea}
          validate={[required]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "message" })(MessageForm);
