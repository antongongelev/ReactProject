import React from "react";
import s from "./Custom.module.css";

const CustomTextFormCreator = (Component) => ({ meta, input, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.custom + " " + (hasError ? s.error : "")}>
      <div>
        <Component {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = CustomTextFormCreator((props) => <input {...props} />);
export const Textarea = CustomTextFormCreator((props) => (
  <textarea {...props} />
));
