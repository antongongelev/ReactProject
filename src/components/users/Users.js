import React from "react";
import defaultPhoto from "../../assets/images/avatar.png";
import s from "./Users.module.css";

const Users = props => {
  return (
    <div className={s}>
      {props.usersPage.users.map(user => (
        <div key={user.id}>
          <div>
            <img
              src={user.photos.small ? user.photos.small : defaultPhoto}
              alt=""
            ></img>
          </div>
          <span>{user.name}</span>
          <div>status: {user.status}</div>
          <div>
            <button onClick={() => props.switchFollow(user.id)}>
              {user.followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
