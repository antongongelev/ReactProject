import * as axios from "axios";
import { withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  createNewPost,
  updateNewPostMessage,
  setProfile
} from "../../reducers/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`
      )
      .then(response => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = state => ({
  profilePage: state.profilePage
});

export default connect(mapStateToProps, {
  createNewPost,
  updateNewPostMessage,
  setProfile
})(withRouter(ProfileContainer));
