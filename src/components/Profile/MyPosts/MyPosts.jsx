import React from "react";
import AboutMe from "../ProfileInfo/AboutMe/AboutMe";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/state";
import { updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    props.dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <div>
      < AboutMe />

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
