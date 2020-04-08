import React from "react";
import s from "./Profile.module.css";
import Posts from "../posts/Posts";
import ProfileInfo from "./../profile-info/ProfileInfo";

const Profile = (props) => {
  debugger;
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
        newPostMessage={props.profilePage.newPostMessage}
        createNewPost={props.createNewPost}
        updateNewPostMessage={props.updateNewPostMessage}
      />
    </div>
  );
};

export default Profile;
