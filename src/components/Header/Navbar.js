import { HashLink } from "react-router-hash-link";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav>
      <ul
        id="primary-navigation"
        className={props.show ? classes.navigation : classes.collapse}
      >
        <li className={classes.active}>
          <HashLink to="#about" smooth>
            About
          </HashLink>
        </li>
        <li>
          <HashLink to="#work" smooth>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink to="#contact" smooth>
            Contact
          </HashLink>
        </li>
        <li>
          <button className={classes.button}>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
