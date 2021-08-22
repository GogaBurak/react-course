import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

{
  /* cN={`${s.items} ${s.active}`}
how to get two className*/
}

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div class={s.navlink}>
        <div className={s.items}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/profile"
          >
            Profile
          </NavLink>
        </div>

        <div className={s.items}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/dialogs"
          >
            Massages
          </NavLink>
        </div>

        <div className={s.items}>
          <NavLink className={s.link} activeClassName={s.activeLink} to="/news">
            News
          </NavLink>
        </div>

        <div className={s.items}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/music"
          >
            Music
          </NavLink>
        </div>

        <div className={s.items}>
          <NavLink
            className={s.link}
            activeClassName={s.activeLink}
            to="/settings"
          >
            <div className={s.set}>Settings</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
