import classes from "./Footer.module.css";
import Socials from "./Socials";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <Socials />
      <div className={classes.credit}>
        <p>
          Built by Superfly & Inspired by{" "}
          <a href="https://brittanychiang.com/" className="primary">
            Brittany Chiang
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
