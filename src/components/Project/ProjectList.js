import classes from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <section id="work" className={classes.projects}>
      <h2>Some Things I've Built</h2>
      <div className={classes.inner}>
        <div className={classes.project}>
          <h3>Coming soon...</h3>
        </div>
        <div className={classes.project}>
          <h3>Coming soon...</h3>
        </div>
        <div className={classes.project}>
          <h3>Coming soon...</h3>
        </div>
        <div className={classes.project}>
          <h3>Coming soon...</h3>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
