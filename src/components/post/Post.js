import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.post}>
      <div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png"
          alt="avatar"
        />
        {props.msg}
        <div>likes: {props.likes}
        </div>
      </div>
    </div>
  );
};

export default Post;
