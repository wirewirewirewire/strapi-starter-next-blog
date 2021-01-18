import React from "react";
import Link from "next/link";
import styles from "./card.module.scss";

const Card = ({ article }) => {
  if (!article.image) return <div>No image set</div>;
  const imageUrl = article.image.url.startsWith("/")
    ? process.env.API_URL + article.image.url
    : article.image.url;

  const filetype = imageUrl.split(".").pop();
  console.log("filetype", filetype);

  const isVideo = filetype === "mov" || filetype === "mp4";
  const thumbnail = isVideo
    ? imageUrl
        .replace("video/upload", "video/upload/ac_none,c_scale,w_520/du_3")
        .replace(".mov", ".mp4")
    : imageUrl.replace("image/upload", "image/upload/c_scale,w_620");
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <a className={styles.card}>
        <div className="uk-card uk-card-muted">
          <div
            className={`${styles.imageWrapper} ${
              isVideo ? styles.imageWrapperVideo : ""
            }`}
          >
            {isVideo && (
              <video
                width="320"
                height="240"
                autoPlay
                loop
                muted
                className={styles.video}
              >
                <source src={thumbnail} type="video/mp4" />
              </video>
            )}
            <img
              src={thumbnail}
              alt={article.image.alternativeText}
              className={styles.image}
              height="100"
            />
          </div>
          <div className={styles.body}>
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
