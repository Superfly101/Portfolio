import { useState } from "react";

const useArticle = () => {
  //   const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchArticle = async (query) => {
    setIsLoading(true);
    const response = await fetch("https://api.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  };

  return { fetchArticle, isLoading, error };
};

export default useArticle;
