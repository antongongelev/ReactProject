import React from "react";
import s from "./Profile.module.css";
import Posts from "../posts/Posts";
import ProfileInfo from "./../profile-info/ProfileInfo";

const Profile = props => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profilePage.profile} />
      <Posts
        profile={props.profilePage.profile}
        posts={props.profilePage.posts}
        newPostMessage={props.profilePage.newPostMessage}
        createNewPost={props.createNewPost}
        updateNewPostMessage={props.updateNewPostMessage}
      />
    </div>
  );
};

export default Profile;
