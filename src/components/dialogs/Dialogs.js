import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./../dialogItem/DialogItem";
import MessageItem from "./../messageItem/MessageItem";

const Dialogs = () => {
  let dialogs = [
    { id: "1", name: "Anton" },
    { id: "2", name: "Elena" },
    { id: "3", name: "Pufic" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Kirill" }
  ];

  let messages = ["Hi", "Hello!", "Yo!"];

  let dialogItems = dialogs.map(d => <DialogItem id={d.id} name={d.name} />);

  let messageItems = messages.map(m => <MessageItem message={m} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogItems}</div>
      <dib className={s.messages}>{messageItems}</dib>
    </div>
  );
};

export default Dialogs;
