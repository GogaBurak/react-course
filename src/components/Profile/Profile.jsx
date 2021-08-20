import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <img
        className={s.img}
        src="http://dgdesign.ru/uploads/posts/2016-09/1473417437_hg6.jpg"
      ></img>
      <ProfileInfo className={s.ProfileInfo} />
      <MyPosts
        className={s.MyPosts}
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
