import React from "react";
import Link from "next/link";
import styles from "./card.module.scss";
import urlGenerator from "../lib/cloudinaryHelper";
import { Cloudinary } from "cloudinary-core";

const Card = ({ article }) => {
  if (!article.image) return <div>No image set</div>;
  const src = article.image.url.startsWith("/")
    ? process.env.API_URL + article.image.url
    : article.image.url;

  const { cloudName, name, isVideo } = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  const videoUrl = cl.video_url(name, {
    width: 620 * 2,
    crop: "pad",
    format: "mp4",
    protocol: "https:",
  });

  const imageUrl = cl.url(name, {
    width: 620 * 2,
    crop: "pad",
    format: "jpg",
    protocol: "https:",
  });

  const posterUrl = cl.video_url(name, {
    width: 620 * 2,
    crop: "pad",
    format: "jpg",
    protocol: "https:",
  });

  return (
    <Link href={`/article/${article.slug}`}>
      <a className={styles.card}>
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
              poster={posterUrl}
              className={styles.video}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          <img
            src={imageUrl}
            alt={article.image.alternativeText}
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
