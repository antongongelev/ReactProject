import React from "react";
import s from "./Profile.module.css";
import Posts from "../posts/Posts";
import ProfileInfo from "./../profile-info/ProfileInfo";

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <Posts />
    </div>
  );
};

export default Profile;
