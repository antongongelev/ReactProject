import React from "react";
import s from "./Profile.module.css";
import PostsContainer from "../posts/PostsContainer";
import ProfileInfo from "./../profile-info/ProfileInfo";

const Profile = props => {
  debugger;
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
