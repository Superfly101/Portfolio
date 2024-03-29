import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Backdrop from "../UI/Backdrop";
import classes from "./Header.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = (event) => {
    setIsActive((prev) => !prev);
  };

  const onCloseHandler = (event) => {
    setIsActive(false);
  };
  return (
    <>
      <header>
        <nav>
          <div className={classes.logo}>
            <h2>
              <a href="./">Superfly</a>
            </h2>
          </div>
          <ul
            className={
              isActive
                ? `${classes["nav-links"]} ${classes["nav-active"]}`
                : classes["nav-links"]
            }
          >
            <li>
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="#projects" smooth>
                Projects
              </HashLink>
            </li>
            <li>
              <HashLink to="#articles" smooth>
                Articles
              </HashLink>
            </li>
            <li>
              <HashLink to="#contact" smooth>
                Contact
              </HashLink>
            </li>
            <li>
              <a
                href="./Daniel_Ukoha.pdf"
                target="_blank"
                rel="noreferrer"
                className={classes.resume}
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            className={
              isActive
                ? `${classes.hamburger} ${classes["is-active"]}`
                : classes.hamburger
            }
            onClick={onClickHandler}
          >
            <div className={classes.bar}></div>
          </button>

          {isActive && <Backdrop onClose={onCloseHandler} />}

          <aside
            aria-hidden="true"
            tabIndex="-1"
            className={isActive ? classes.show : classes.hide}
          >
            <nav>
              <ul>
                <li>
                  <HashLink to="#about" onClick={onCloseHandler} smooth>
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#projects" onClick={onCloseHandler} smooth>
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#articles" onClick={onCloseHandler} smooth>
                    Articles
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#contact" onClick={onCloseHandler} smooth>
                    Contact
                  </HashLink>
                </li>
                <li>
                  <a
                    href="./Daniel_Ukoha.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.resume}
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        </nav>
      </header>
    </>
  );
};

export default Header;
