import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user")).email.split("@")[0];

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
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
      </ul>
      <div>
        <label className={styles.left}>{userName}</label>
        <label
          onClick={(e) => {
            localStorage.removeItem("user");
            navigate("/");
          }}
        >
          ⇨
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
