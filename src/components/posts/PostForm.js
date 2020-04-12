import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../validators/validators";
import { Textarea } from "../tools/custom-elements/CustomForms";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="postText"
          placeholder="Add new post..."
          component={Textarea}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Publish</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "post" })(PostForm);
