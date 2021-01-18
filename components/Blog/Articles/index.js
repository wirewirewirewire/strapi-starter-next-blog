import React from "react";
import Card from "../Card";
import styles from "./article.module.scss";

const Articles = ({ articles }) => {
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
