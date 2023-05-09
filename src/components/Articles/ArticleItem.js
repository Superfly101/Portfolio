import classes from "./Articles.module.css";

const ArticleItem = ({ title, coverImage, brief, slug }) => {
  return (
    <li>
      <div>
        <a
          href={`https://superfly.hashnode.dev/${slug}`}
          target="_black"
          rel="noreferrer"
        >
          <img src={coverImage} alt={`${title} article`} />
        </a>
      </div>
      <div>
        <h3 className="primary">{title}</h3>
        <p>{brief}</p>
        <div className={classes.more}>
          <a
            href={`https://superfly.hashnode.dev/${slug}`}
            target="_blank"
            rel="noreferrer"
          >
            Read more...
          </a>
        </div>
      </div>
    </li>
  );
};

export default ArticleItem;
