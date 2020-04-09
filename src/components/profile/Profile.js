import React from "react";
import s from "./Profile.module.css";
import Posts from "../posts/Posts";
import ProfileInfo from "./../profile-info/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        profile={props.profilePage.profile}
        myId={props.myId}
        userId={props.profilePage.userId}
        status={props.profilePage.status}
        updateStatus={props.updateStatusThunk}
      />
      <Posts
        profile={props.profilePage.profile}
        posts={props.profilePage.posts}
        createNewPost={props.createNewPost}
      />
    </div>
  );
};

export default Profile;
