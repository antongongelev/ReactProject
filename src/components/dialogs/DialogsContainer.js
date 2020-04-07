import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../reducers/dialogs-reducer";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(withAuthRedirect(Dialogs));

export default DialogsContainer;
