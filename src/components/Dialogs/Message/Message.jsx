import s from "./../Dialogs.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>
        <img className={s.avatar} src={props.src}></img>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
