import classes from "./Articles.module.css";

const ArticleItem = ({ title, coverImage, brief, slug }) => {
  return (
    <li>
      <div>
        <img src={coverImage} />
      </div>
      <div>
        <h3 className="primary">{title}</h3>
        <p className={classes.more}>{brief}</p>
        <a href={`https://superfly.hashnode.dev/${slug}`} target="_blank">
          Read more...
        </a>
      </div>
    </li>
  );
};

export default ArticleItem;
