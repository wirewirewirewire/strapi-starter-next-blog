import React from "react";
import styles from "./media.module.scss";
import Caption from "../Caption";

export default function Media(props) {
  const { src } = props;

  const filetype = src.split(".").pop();
  console.log("filetype", filetype);

  const isVideo = filetype === "mov" || filetype === "mp4";
  const thumbnail = isVideo;

  const rest = src.substring(0, src.lastIndexOf("/") + 1);
  const last = src.substring(src.lastIndexOf("/") + 1, src.length);
  const scope = rest.substring(0, rest.lastIndexOf("/v") + 1);

  console.log(scope);
  if (isVideo) {
    return (
      <video autoPlay loop muted className={styles.video}>
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div>
      <img
        srcSet={`${scope}c_scale,w_800/${last} 800w, ${scope}c_scale,w_1600/${last} 1600w`}
        sizes="(max-width: 600px) 100vw,
            800px"
        {...props}
        src={`${scope}c_scale,w_1600/${last}`}
      />
      <Caption>{props.alt}</Caption>
    </div>
  );
}
