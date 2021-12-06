import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  imageUrl: string;
  content: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/articles"
    );
    setArticles(response);
  };
  return (
    <div className="flex justify-center items-center">
      {articles.length ? (
        <div className="flex w-2/3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="mx-6 rounded-2xl shadow-2xl p-6 h-full max-w-md cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-2">
                <img
                  src={article.imageUrl}
                  className="rounded-2xl object-contain h-96"
                />
              </div>
              <p className="text-lg font-semibold my-2">{article.title}</p>
              <p className="mt-6 text-sm">{article.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-between items-center py-80 flex-col">
          <p className="mx-6 text-4xl text-gray-700">
            You don't have access yet
          </p>
          <Link
            to="/article-plans"
            className="text-xl mt-3 text-blue-500 font-semibold text-center"
          >
            Buy a plan
          </Link>
        </div>
      )}
    </div>
  );
};

export default Articles;
