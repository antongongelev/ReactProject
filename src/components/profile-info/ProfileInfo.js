import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";
import defaultPhoto from "../../assets/images/avatar.png";
import Preloader from "../tools/preloader/Preloader";
import { DEFAULT_STATUS } from "../../reducers/profile-reducer";

const ProfileInfo = (props) => {
  debugger;
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    if (props.myId === props.userId) {
      setEditMode(true);
    }
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status ? status : DEFAULT_STATUS);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

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
      <div>
        {editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
              onChange={onStatusChange}
            />
          </div>
        )}
        {!editMode && (
          <div onClick={activateEditMode}>
            <span>{status}</span>
          </div>
        )}
      </div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
