import s from "./AboutMe.module.css";

const AboutMe = (props) => {
    return (
    <div className={s.info}>
        <div className={s.myName}>Alexandra Skroba</div>
        <div className={s.description}> Some information about me </div>

        <hr className={s.line} />
    </div>
    )
}

export default AboutMe