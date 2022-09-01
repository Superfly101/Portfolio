import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const projects = [
  {
    title: "ChunkIT",
    href: "https://chunkt.pythonanywhere.com/",
    repository:
      "https://github.com/zuri-training/Pro_Team_41_Chunk-File#readme",
    description:
      "A platform that accepts CSV or JSON large files and chunks them into smaller bits.",
    technologiesUsed: ["HTML", "CSS", "JavaScript", "Django"],
  },
];

const ProjectList = () => {
  return (
    <section id="work" className={classes.projects}>
      <h2>Some Things I've Built</h2>

      <ul>
        {projects.map((project) => (
          <ProjectItem
            title={project.title}
            desc={project.description}
            href={project.href}
            technologies={project.technologiesUsed}
            repo={project.repository}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
