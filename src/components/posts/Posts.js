import React from "react";
import Post from "./../post/Post";
import s from "./Posts.module.css";

const Posts = props => {
  let state = props.postsPage;

  let postItems = state.posts.map(p => (
    <Post key={p.id} msg={p.msg} likes={p.likes} />
  ));

  let newPostMessage = state.newPostMessage;

  let newPostMessageChange = e => {
    let body = e.target.value;
    props.updateNewPostMessage(body);
  };

  let createNewPost = () => {
    props.createNewPost();
  };

  return (
    <div>
      <div className={s.newPost}>
        <input
          placeholder="Add new post"
          value={newPostMessage}
          onChange={newPostMessageChange}
        ></input>
        <button onClick={createNewPost}>Add</button>
      </div>
      {postItems}
    </div>
  );
};

export default Posts;
