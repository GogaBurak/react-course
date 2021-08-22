import React from "react";
import { NavLink } from "react-router-dom";
import DialogItems from "./DialogItem/DialogItems";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

<DialogItems />;

<Message />;

const Dialogs = (props) => {
  console.log('govno is ' + props.updateNewMessText)

  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItems name={d.name} id={d.id} src={d.src} />
  ));

  let messadeElements = props.state.messages.map((m) => (
    <Message message={m.message} src={m.src} />
  ));

  let newMessElement = React.createRef();

  let addMess = () => {
    props.addMess();
  }

  let onMessChange = () => {
    let text = newMessElement.current.value;
    props.updateNewMessText(text);
}

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}> {dialogElements} </div>
      <div className={s.messages}>
        {messadeElements}
        <div className={s.send}>
          <textarea  
            onChange={onMessChange}
            ref={newMessElement} 
            className={s.textarea} 
            value={props.newMessText} 
          />
          <button 
            onClick={addMess} 
            className={s.button}>
              Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
