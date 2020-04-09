import React from "react";
import { Field, reduxForm } from "redux-form";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="postText"
          placeholder="Add new post..."
          component="input"
        />
      </div>
      <div>
        <button>Publish</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "post" })(PostForm);
