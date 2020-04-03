import React from "react";
import s from "./ProfileInfo.module.css";
import defaultPhoto from "../../assets/images/avatar.png";
import Preloader from "../tools/preloader/Preloader";

const ProfileInfo = props => {
  debugger;
  if (!props.profile.userId) {
    return <Preloader />;
  }

  return (
    <div className={s.profileInfo}>
      <img
        src={
          props.profile.photos.large ? props.profile.photos.large : defaultPhoto
        }
        alt="Avatar"
      />
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
