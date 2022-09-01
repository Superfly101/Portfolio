import { Fragment } from "react";
import Header from "../Header/Header";
// import MainHeader from "../Header/MainHeader";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <Header />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
