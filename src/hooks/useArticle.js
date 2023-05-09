import { useEffect, useState } from "react";

const useArticle = () => {
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

      const response = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setArticles(json.data.user.publication.posts);
    };
    console.log("Running Effect");
    fetchArticle(GET_USER_ARTICLES, { page: 0 });
  }, [GET_USER_ARTICLES]);

  return { articles, isLoading, error };
};

export default useArticle;
