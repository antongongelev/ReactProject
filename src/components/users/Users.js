import React from "react";
import defaultPhoto from "../../assets/images/avatar.png";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = props => {
  return (
    <div className={s.users}>
      {props.usersPage.users.map(user => (
        <div key={user.id}>
          <div>
            <NavLink to={`/profile/${user.id}`}>
              <img
                src={user.photos.small ? user.photos.small : defaultPhoto}
                alt=""
              ></img>
            </NavLink>
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
