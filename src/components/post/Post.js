import React from "react";
import s from "./Post.module.css";
import defaultPhoto from "../../assets/images/avatar.png";

const Post = props => {
  return (
    <div className={s.post}>
      <div>
        <img
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : defaultPhoto
          }
          alt="avatar"
        />
        {props.msg}
        <div>likes: {props.likes}</div>
      </div>
    </div>
  );
};

export default Post;
