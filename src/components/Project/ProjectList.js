import { PROJECTS } from "../../constants/project";
import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const ProjectList = () => {
  return (
    <section id="projects" className={classes.projects}>
      <h2>Some Things I've Built</h2>

      <ul className={classes.list}>
        {PROJECTS.map((project, index) => (
          <ProjectItem
            key={index}
            id={project.title}
            title={project.title}
            image={project.img}
            desc={project.description}
            href={project.href}
            technologies={project.technologiesUsed}
            repo={project.repository}
            contribution={project.contribution}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
