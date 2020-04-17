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
import { createNewPost } from "../../reducers/profile-reducer";
import { compose } from "redux";
import { getId } from "../../selectors/selectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileThunk(this.props.match.params.userId);
    this.props.getStatusThunk(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
  myId: getId(state),
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    createNewPost,
    getProfileThunk,
    getStatusThunk,
    updateStatusThunk,
  })
)(ProfileContainer);
