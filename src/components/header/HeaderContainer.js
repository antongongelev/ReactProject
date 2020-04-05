import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setCredentials } from "../../reducers/auth-reducer";
import { authoriseThunk } from "../../reducers/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authoriseThunk();
  }

  render() {
    return <Header {...this.props.authData} />;
  }
}

let mapStateToProps = (state) => ({ authData: state.authData });

export default connect(mapStateToProps, { setCredentials, authoriseThunk })(
  HeaderContainer
);
