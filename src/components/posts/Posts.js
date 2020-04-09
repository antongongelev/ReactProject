import React from "react";
import Post from "./../post/Post";
import s from "./Posts.module.css";
import PostForm from "./PostForm";

const Posts = (props) => {
  let postItems = props.posts.map((p) => (
    <Post key={p.id} msg={p.msg} likes={p.likes} profile={props.profile} />
  ));

  return (
    <div>
      <div className={s.newPost}>
        <PostForm onSubmit={props.createNewPost} />
      </div>
      {postItems}
    </div>
  );
};

export default Posts;
