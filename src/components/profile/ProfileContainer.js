import { withRouter } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunk,
  getStatusThunk,
  updateStatusThunk,
} from "../../reducers/profile-reducer";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import {
  createNewPost,
  updateNewPostMessage,
} from "../../reducers/profile-reducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk(this.props.match.params.userId);
    this.props.getStatusThunk(this.props.match.params.userId);
  }

  render() {
    debugger;
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  myId: state.authData.id,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    createNewPost,
    updateNewPostMessage,
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk,
  })
)(ProfileContainer);
