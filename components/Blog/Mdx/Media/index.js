import React from "react";
import styles from "./media.module.scss";
import Caption from "../Caption";
import Lightbox from "./Lightbox";
import { Cloudinary } from "cloudinary-core";
var cl = new Cloudinary({ cloud_name: "deeoqlpnx", secure: false });

export default function Media(props) {
  const { src } = props;

  const filetype = src.split(".").pop();

  const isVideo = filetype === "mov" || filetype === "mp4";
  const thumbnail = isVideo;

  const rest = src.substring(0, src.lastIndexOf("/") + 1);
  const last = src.substring(src.lastIndexOf("/") + 1, src.length);
  const nameWithoutFilename = last.substring(0, last.lastIndexOf("."));
  const scope = rest.substring(0, rest.lastIndexOf("/v") + 1);
  console.log(filetype, src, rest, last, nameWithoutFilename, scope);

  if (isVideo) {
    const url = cl.video_url(nameWithoutFilename, {
      format: "mp4",
    });

    const imageUrl = cl.video_url(nameWithoutFilename, {
      width: 1600,
      format: "jpg",
    });

    return (
      <video autoPlay loop muted poster={imageUrl} className={styles.video}>
        <source src={url} type="video/mp4" />
      </video>
    );
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
