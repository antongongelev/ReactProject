import React from "react";

const Users = props => {
  let users = props.usersPage.users;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <span>{user.firstName + " " + user.lastName}</span>
          <div>age: {user.age}</div>
          <div>sex: {user.sex}</div>
          <div>location: {user.city + ", " + user.country}</div>
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
