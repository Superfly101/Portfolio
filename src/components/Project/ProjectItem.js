import classes from "./ProjectItem.module.css";
import chunkItImg from "../../assets/img/ChunkIT1.jpg";

const ProjectItem = (props) => {
  return (
    <li className={classes.inner}>
      <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={classes.project}
      >
        <img src={chunkItImg} alt="ChunkIt" />
      </a>
      <div href={props.href} className={classes["collapsed-desc"]}>
      <a className={classes.link} href={props.href} target='_blank' rel="nonreferrer"></a>

        <p className="primary">Featured Project</p>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.details}> {props.desc}</p>
        <ul>
          {props.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div>
          <a
            className={classes["external-link"]}
            href={props.repo}
            rel="noreferrer"
            aria-label="Github"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            className={classes["external-link"]}
            href={props.href}
            aria-label="ChunkIT"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              // class="external-link"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div className={classes.description} >
        <p className="primary">Featured Project</p>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.details}> {props.desc}</p>
        <ul>
          {props.technologies.map((tech) => (
            <li>{tech}</li>
          ))}
        </ul>
        <div>
          <a
            className={classes["external-link"]}
            href={props.repo}
            rel="noreferrer"
            aria-label="Github"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            className={classes["external-link"]}
            href={props.href}
            aria-label="ChunkIT"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              // class="external-link"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>

      {/* <div className={classes.project}>
      <h3>Coming soon...</h3>
    </div>
    <div className={classes.project}>
      <h3>Coming soon...</h3>
    </div>
    <div className={classes.project}>
      <h3>Coming soon...</h3>
    </div> */}
    </li>
  );
};

export default ProjectItem;
