import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users.js";
import {
  switchFollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC
} from "../../reducers/users-reducer";
import Paginator from "../tools/paginator/Paginator.js";

class UsersApi extends React.Component {
  getUsersUrl = (page, count) => {
    return `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`;
  };
  setCurrentPage = page => {
    debugger;
    console.log("you have selected page number " + page);
    axios
      .get(this.getUsersUrl(page, this.props.usersPage.pageSize))
      .then(response => {
        this.props.setCurrentPage(page);
        this.props.setUsers(response.data.items);
      });
  };
  componentDidMount() {
    debugger;
    axios
      .get(
        this.getUsersUrl(
          this.props.usersPage.currentPage,
          this.props.usersPage.pageSize
        )
      )
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  render() {
    let pagesCount = Math.ceil(
      this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <Paginator
          currentPage={this.props.usersPage.currentPage}
          pages={pages}
          setCurrentPage={this.setCurrentPage}
        />
        <Users
          usersPage={this.props.usersPage}
          setCurrentPage={this.setCurrentPage}
          switchFollow={this.props.switchFollow}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { usersPage: state.usersPage };
};

const mapDispatchToProps = dispatch => {
  debugger;
  return {
    switchFollow: userId => {
      dispatch(switchFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: page => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: usersCount => {
      dispatch(setTotalUsersCountAC(usersCount));
    }
  };
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApi);

export default usersContainer;
