import Navbar from "./Navbar";
import classes from "./MainHeader.module.css";
import { useState } from "react";

const MainHeader = (props) => {
  // const isExpanded = props.isExpanded;
  const [isExpanded, setIsExpanded] = useState(false);

  const onClickHandler = () => {
    setIsExpanded((prevState) => !isExpanded);
  };

  return (
    <header className={classes.header}>
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
