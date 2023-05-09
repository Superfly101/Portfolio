import classes from "./Articles.module.css";
import useArticle from "../../hooks/useArticle";
import ArticleItem from "./ArticleItem";

const Articles = () => {
  // const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState("");
  const { articles, isLoading, error } = useArticle();

  return (
    <section id="articles" className={classes.articles}>
      <h2>My Technical Articles</h2>

      <ul className={classes.list}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Couldn't fetch articles</p>}
        {!isLoading &&
          !error &&
          articles.map((article, index) => (
            <ArticleItem key={index} {...article} />
          ))}
      </ul>
    </section>
  );
};

export default Articles;
