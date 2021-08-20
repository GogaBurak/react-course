import React from "react";
import { NavLink } from "react-router-dom";
import DialogItems from "./DialogItem/DialogItems";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

<DialogItems />;

<Message />;

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItems name={d.name} id={d.id} src={d.src} />
  ));

  let messadeElements = props.state.messages.map((m) => (
    <Message message={m.message} src={m.src} />
  ));

  let sendMessageElement = React.createRef();

  let sendMessage = () => {
    let mess = sendMessageElement.current.value;
    alert(mess);
    sendMessageElement.current.value = "";
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}> {dialogElements} </div>
      <div className={s.messages}>
        {messadeElements}
        <div className={s.send}>
          <textarea ref={sendMessageElement} className={s.textarea}></textarea>
          <button onClick={sendMessage} className={s.button}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
