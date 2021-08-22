import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div class={s.main_photo}>
      <img
        className={s.img}
        src="https://static10.tgstat.ru/channels/_0/e4/e4d0807d7a8839e09433a12884e33c15.jpg"
      />
    </div>
  );
};

export default ProfileInfo;
