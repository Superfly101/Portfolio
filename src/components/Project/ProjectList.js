import ProjectItem from "./ProjectItem";
import classes from "./ProjectList.module.css";

const projects = [
  {
    title: "MyQuiz App",
    img: "https://res.cloudinary.com/dpfycjmuw/image/upload/v1682936241/my-quiz-app_pkrakf.png",
    href: "https://quiz-app-hazel-delta.vercel.app/",
    description:
      "A web app to help prepare for tests in subjects like Mathematics, Sports, History, Politics, Japanese Anime & Manga, etc.",
    technologiesUsed: [
      "Chakra-UI",
      "TailwindCSS",
      "TypeScript",
      "Next.js",
      "TriviaAPI",
    ],
    repository: "https://github.com/Superfly101/Quiz-App",
    contribution: "Personal Project",
  },
  {
    contribution: "Featured Project",
    title: "Creative Start Website",
    img: "https://res.cloudinary.com/dpfycjmuw/image/upload/v1676403705/ChunkIT_-_Google_Chrome_14_02_2023_20_23_59_rs8jem.png",
    href: "https://creative-start-website.vercel.app",
    description:
      "A fullstack company website that connects the company and their potential clients",
    technologiesUsed: ["React.js", "TailwindCSS", "Next.js", "Cloudinary"],
  },
  {
    title: "Musica",
    href: "http://musica-six.vercel.app/",
    img: "https://res.cloudinary.com/dpfycjmuw/image/upload/v1676403651/ChunkIT_-_Google_Chrome_14_02_2023_20_25_38_ga1svs.png",
    repository: "https://github.com/Superfly101/Musica",
    description: "A simple music web application",
    technologiesUsed: ["React.js", "TailwindCSS", "Next.js"],
    contribution: "Personal Project In Progress",
  },
  // {
  //   contribution: "Featured Project",
  //   title: "ChunkIT",
  //   img: "https://res.cloudinary.com/dpfycjmuw/image/upload/v1676403550/ChunkIT_-_Google_Chrome_14_02_2023_20_23_02_qlhtfu.png",
  //   href: "https://chunkt.pythonanywhere.com/",
  //   repository:
  //     "https://github.com/zuri-training/Pro_Team_41_Chunk-File#readme",
  //   description:
  //     "A platform that accepts CSV or JSON large files and chunks them into smaller bits.",
  //   technologiesUsed: ["HTML", "CSS", "JavaScript", "Django"],
  // },
];

const ProjectList = () => {
  return (
    <section id="projects" className={classes.projects}>
      <h2>Some Things I've Built</h2>

      <ul className={classes.list}>
        {projects.map((project, index) => (
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
