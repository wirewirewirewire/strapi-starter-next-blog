import React from "react";
import styles from "./image.module.scss";
import Caption from "../Caption";
import Lightbox from "./Lightbox";
import { Cloudinary } from "cloudinary-core";

export default function Image(props) {
  const { src } = props;

  const filetype = src.split(".").pop();

  const cloudName = src.split("/")[3];

  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  const isVideo = filetype === "mov" || filetype === "mp4";
  const thumbnail = isVideo;

  const rest = src.substring(0, src.lastIndexOf("/") + 1);
  const last = src.substring(src.lastIndexOf("/") + 1, src.length);
  const nameWithoutFilename = last.substring(0, last.lastIndexOf("."));
  const scope = rest.substring(0, rest.lastIndexOf("/v") + 1);

  if (isVideo) {
    const url = cl.video_url(nameWithoutFilename, {
      format: "mp4",
    });

    const imageUrl = cl.video_url(nameWithoutFilename, {
      width: 1600,
      format: "jpg",
    });

    return (
      <div className={styles.mediaWrapper}>
        <video autoPlay loop muted poster={imageUrl} className={styles.video}>
          <source src={url} type="video/mp4" />
        </video>
        {props.title && <Caption>{props.title}</Caption>}
      </div>
    );
  }

  if (props.disableLightbox) {
    return <img {...props} />;
  }

  return (
    <div className={styles.mediaWrapper}>
      <Lightbox {...props}>
        {/*<img
          srcSet={`${scope}c_scale,w_800/${last} 800w, ${scope}c_scale,w_1600/${last} 1600w`}
          sizes="(max-width: 600px) 100vw,
            800px"
          {...props}
          src={`${scope}c_scale,w_1600/${last}`}
        />*/}
      </Lightbox>
      {props.title && <Caption>{props.title}</Caption>}
    </div>
  );
}
