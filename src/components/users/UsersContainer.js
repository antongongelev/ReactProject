import { connect } from "react-redux";
import Users from "./Users";
import { switchFollowAC, setUsersAC } from "../../reducers/users-reducer";

const mapStateToProps = state => {
  return { usersPage: state.usersPage };
};

const mapDispatchToProps = dispatch => {
  return {
    switchFollow: userId => {
      dispatch(switchFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
