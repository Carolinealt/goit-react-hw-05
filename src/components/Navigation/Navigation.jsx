import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const getClassNames = ({ isActive }) => {
  return clsx(css.navItem, isActive && css.isActive);
};
const Navigation = () => {
  return (
    <>
      <nav className={css.navList}>
        <NavLink to="/" className={getClassNames}>
          home
        </NavLink>
        <NavLink to="/movies" className={getClassNames}>
          movies
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
