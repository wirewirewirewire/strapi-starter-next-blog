import React from "react";
import Link from "next/link";
import styles from "./card.module.scss";

const Card = ({ article }) => {
  const imageUrl = article.image.url.startsWith("/")
    ? process.env.API_URL + article.image.url
    : article.image.url;
  return (
    <Link as={`/article/${article.id}`} href="/article/[id]">
      <a className={styles.card}>
        <div className="uk-card uk-card-muted">
          <div className={styles.imageWrapper}>
            <img
              src={imageUrl}
              alt={article.image.alternativeText}
              className={styles.image}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
