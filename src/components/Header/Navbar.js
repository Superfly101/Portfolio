import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav>
      <ul
        id="primary-navigation"
        className={props.show ? classes.navigation : classes.collapse}
      >
        <li className={classes.active}>
          <a href="index.html">About</a>
        </li>
        <li>
          <a href="i">Work</a>
        </li>
        <li>
          <a href="i">Contact</a>
        </li>
        <li>
          <button className={classes.button}>Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
