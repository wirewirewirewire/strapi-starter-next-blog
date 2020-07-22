import React from "react";
import styles from "./media.module.scss";

export default function Media(props) {
  const { src } = props;

  const filetype = src.split(".").pop();
  console.log("filetype", filetype);

  const isVideo = filetype === "mov" || filetype === "mp4";
  const thumbnail = isVideo;

  if (isVideo) {
    return (
      <video autoPlay loop muted className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return <img {...props} />;
}
