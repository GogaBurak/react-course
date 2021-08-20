import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.myName}>Alexandra Skroba</div>
        <div className={s.description}> Some information about me </div>

        <hr className={s.line} />
      </div>

      <div className={s.AllPosts}>
        <div className={s.MyPosts}>My posts</div>
        <div className={s.MyPosts}>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}
          />
          <button onClick={addPost} className={s.button}>
            Add post
          </button>
        </div>
        <div className={s.post}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
