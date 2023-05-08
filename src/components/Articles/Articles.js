import { useEffect, useState } from "react";
import classes from "./Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const GET_USER_ARTICLES = `query GetUserArticles($page: Int!) {
    user(username: "Superfly") {
      publication {
        posts(page: $page) {
          title
          brief
          coverImage
          slug
        }
      }
    }
  }`;

  useEffect(() => {
    const fetchArticle = async (query, variables = {}) => {
      setIsLoading(true);
      console.log("fetching");
      // console.log(response);

      const response = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      console.log(response);

      const json = await response.json();

      if (!response.ok) {
        console.log(json);
        setError(json);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      console.log(json);
      // setArticles(json.)
    };

    fetchArticle(GET_USER_ARTICLES, { page: 0 });
  }, []);
  return (
    <section id="articles" className={classes.articles}>
      <h2>My Technical Articles</h2>

      <ul className={classes.list}></ul>
    </section>
  );
};

export default Articles;
