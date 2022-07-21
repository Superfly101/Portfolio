import Navbar from "./Navbar";
import classes from "./MainHeader.module.css";
import { useCallback, useEffect, useState } from "react";

const MainHeader = (props) => {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [currentScroll, setCurrentScroll] = useState(0);

  const onScroll = useCallback(() => {
    setCurrentScroll(window.scrollY);
    if (prevScroll > currentScroll) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    setPrevScroll(currentScroll);
  }, [prevScroll, currentScroll]);

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);

  const onClickHandler = () => {
    setIsExpanded((prevState) => !isExpanded);
  };

  return (
    <header className={showHeader ? classes.header : classes["hide-header"]}>
      <div className={classes.logo}>
        <h1>Superfly</h1>
      </div>

      <button
        onClick={onClickHandler}
        className={isExpanded ? classes.expand : classes["navbar-toggle"]}
      >
        <span className={classes["sr-only"]}>Menu</span>
      </button>

      <Navbar show={isExpanded} />
    </header>
  );
};

export default MainHeader;
