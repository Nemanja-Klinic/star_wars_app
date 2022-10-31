import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isHamburger, setIsHamburger] = useState(false);
  const userName = JSON.parse(localStorage.getItem("user")).email.split("@")[0];

  return (
    <>
      <div className={styles.icon}>
        <img src="/icon.png" alt="star wars" />
      </div>
      <nav>
        <ul>
          <li
            onClick={(e) => {
              setIsHamburger(!isHamburger);
            }}
            className={styles.hamburger}
          >
            ☰
          </li>
          <li>
            <NavLink to="/resources/films">Films</NavLink>
          </li>
          <li>
            <NavLink to="/resources/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/resources/starships">Starships</NavLink>
          </li>
          <li>
            <NavLink to="/resources/vehicles">Vehicles</NavLink>
          </li>
          <li>
            <NavLink to="/resources/species">Species</NavLink>
          </li>
          <li>
            <NavLink to="/resources/planets">Planets</NavLink>
          </li>
        </ul>

        <div className={styles.userName}>
          <label>{userName}</label>
          <label
            className={styles.right}
            onClick={(e) => {
              localStorage.removeItem("user");
              navigate("/");
            }}
          >
            ⇨
          </label>
        </div>
      </nav>
      {isHamburger ? (
        <ul className={styles.hamburgerMenu}>
          <li>
            <NavLink
              onClick={(e) => {
                setIsActive(true);
              }}
              className={({ isActive }) => (isActive ? ".active" : ".inactive")}
              to="/resources/films"
            >
              Films
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources/people">People</NavLink>
          </li>
          <li>
            <NavLink to="/resources/starships">Starships</NavLink>
          </li>
          <li>
            <NavLink to="/resources/vehicles">Vehicles</NavLink>
          </li>
          <li>
            <NavLink to="/resources/species">Species</NavLink>
          </li>
          <li>
            <NavLink to="/resources/planets">Planets</NavLink>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;
