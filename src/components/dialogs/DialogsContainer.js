import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  sendMessage,
  updateNewMessageBody
} from "../../reducers/dialogs-reducer";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage
})(Dialogs);

export default DialogsContainer;
