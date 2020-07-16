import React from "react";
import Card from "./card";
import styles from "./article.module.scss";

const Articles = ({ articles }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <div>
      <div className={styles.articles}>
        {articles.map((article) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Articles;
