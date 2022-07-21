import { Card } from "@mui/material";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <section className={classes.projects}>
      <h2>Some Things I've Built</h2>

      <div className={classes.inner}>
        <Card className={classes.project}>
          {/* <h4>Title</h4>
        <p>description</p>
        <p>Technologies</p> */}
          <h3>Coming soon...</h3>
        </Card>
        <Card className={classes.project}>
          <h3>Coming soon...</h3>
        </Card>
        <Card className={classes.project}>
          <h3>Coming soon...</h3>
        </Card>
        <Card className={classes.project}>
          <h3>Coming soon...</h3>
        </Card>
      </div>
    </section>
  );
};

export default ProjectList;
