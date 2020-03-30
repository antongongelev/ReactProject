import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./../dialogItem/DialogItem";
import MessageItem from "./../messageItem/MessageItem";

const Dialogs = props => {
  let state = props.dialogsPage;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  let dialogItems = state.dialogs.map(d => (
    <DialogItem id={d.id} key={d.id} name={d.name} />
  ));

  let messageItems = state.messages.map(m => (
    <MessageItem message={m.msg} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogItems}</div>
      <div className={s.messages}>{messageItems}</div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
