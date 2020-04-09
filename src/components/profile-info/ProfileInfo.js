import React from "react";
import s from "./ProfileInfo.module.css";
import defaultPhoto from "../../assets/images/avatar.png";
import Preloader from "../tools/preloader/Preloader";
import { DEFAULT_STATUS } from "../../reducers/profile-reducer";

class ProfileInfo extends React.Component {
  state = {
    inEditMode: false,
    status: this.props.status,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    if (this.props.myId === this.props.userId) {
      this.setState({ inEditMode: true });
    }
  };

  deactivateEditMode = () => {
    this.setState({ inEditMode: false });
    this.props.updateStatus(
      this.state.status ? this.state.status : DEFAULT_STATUS
    );
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render() {
    if (!this.props.profile.userId) {
      return <Preloader />;
    }

    return (
      <div className={s.profileInfo}>
        <img
          src={
            this.props.profile.photos.large
              ? this.props.profile.photos.large
              : defaultPhoto
          }
          alt="Avatar"
        />
        <div>
          {this.state.inEditMode && (
            <div>
              <input
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                value={this.state.status}
                onChange={this.onStatusChange}
              />
            </div>
          )}
          {!this.state.inEditMode && (
            <div onClick={this.activateEditMode}>
              <span>{this.props.status}</span>
            </div>
          )}
        </div>
        <div>{this.props.profile.fullName}</div>
        <div>{this.props.profile.aboutMe}</div>
      </div>
    );
  }
}

export default ProfileInfo;
