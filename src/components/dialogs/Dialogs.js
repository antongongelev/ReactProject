import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./../dialogItem/DialogItem";
import MessageItem from "./../messageItem/MessageItem";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogItems = state.dialogs.map((d) => (
    <DialogItem id={d.id} key={d.id} name={d.name} />
  ));

  let messageItems = state.messages.map((m) => (
    <MessageItem message={m.msg} key={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogItems}</div>
      <div className={s.messages}>{messageItems}</div>
      <MessageForm onSubmit={props.sendMessage} />
    </div>
  );
};

export default Dialogs;
