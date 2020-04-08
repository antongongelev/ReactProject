import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../reducers/dialogs-reducer";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
  })
)(Dialogs);
