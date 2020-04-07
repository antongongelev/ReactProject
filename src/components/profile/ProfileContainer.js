import { withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfileThunk } from "../../reducers/profile-reducer";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import {
  createNewPost,
  updateNewPostMessage,
} from "../../reducers/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    this.props.getProfileThunk(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

export default connect(mapStateToProps, {
  createNewPost,
  updateNewPostMessage,
  getProfileThunk,
})(withRouter(withAuthRedirect(ProfileContainer)));
