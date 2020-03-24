import React from "react";
import Post from "./../post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  let posts = [
    {
      msg: "Hi! I'm ninja warior!",
      likes: "1"
    },
    {
      msg: "I'm here for revenge",
      likes: "1"
    }
  ]

let postItems = posts.map(p => <Post msg={p.msg} likes={p.likes}/>)

  return (
    <div>
      <div className={s.newPost}>
        <input placeholder="Add new post"></input>
        <button>Add</button>
      </div>
      {postItems}
    </div>
  );
};

export default Posts;
