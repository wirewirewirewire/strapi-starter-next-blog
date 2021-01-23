import React from "react";
import styles from "./media.module.scss";
import Caption from "../Caption";
import Lightbox from "./Lightbox";
import { Cloudinary } from "cloudinary-core";
import urlGenerator from "../../lib/cloudinaryHelper";

export default function Media(props) {
  const { src } = props;

  const { cloudName, name, isVideo } = urlGenerator(src);
  var cl = new Cloudinary({ cloud_name: cloudName, secure: false });

  if (isVideo) {
    const url = cl.video_url(name, {
      format: "mp4",
    });

    const imageUrl = cl.video_url(name, {
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
