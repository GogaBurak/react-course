import s from './Post.module.css'

const Post = (props) => {
  return(
      <div className={s.OtherPosts}>
        <div className={s.item}>
          <img className={s.ava} src='https://www.meme-arsenal.com/memes/cb377089d0d38248afd838c9a11f5149.jpg'></img>
            {props.message}
        </div> 
        <span className={s.like}>like</span> {props.likesCount}
      </div>  
  );
}

export default Post