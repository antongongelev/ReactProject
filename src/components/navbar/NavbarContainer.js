import Navbar from "./Navbar";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    myId: state.authData.id,
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
