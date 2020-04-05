import { connect } from "react-redux";
import React from "react";
import Users from "./Users.js";
import Preloader from "../tools/preloader/Preloader.js";
import {
  setCurrentPage,
  getUsersThunk,
  switchFollowThunk,
} from "../../reducers/users-reducer";
import Paginator from "../tools/paginator/Paginator.js";

class UsersContainer extends React.Component {
  setCurrentPage = (page) => {
    this.props.getUsersThunk(page, this.props.usersPage.pageSize);
  };
  componentDidMount() {
    this.props.getUsersThunk(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    );
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
        {this.props.usersPage.isLoading ? (
          <Preloader />
        ) : (
          <Users
            usersPage={this.props.usersPage}
            setCurrentPage={this.setCurrentPage}
            switchFollowThunk={this.props.switchFollowThunk}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { usersPage: state.usersPage };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunk,
  switchFollowThunk,
})(UsersContainer);
