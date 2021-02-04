import React, { useEffect, useState, useRef } from "react";
import { motion, useDomEvent, useMotionValue } from "framer-motion";
import styles from "./lightbox.module.scss";
import { useGesture } from "react-use-gesture";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

const Lightbox = (props) => {
  const [isOpen, setOpen] = useState(false);
  const domTarget = useRef(null);

  const scale = useMotionValue(1);

  if (typeof window != "undefined")
    useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  const handleSize = (image) => {
    console.log(image.offsetWidth, image.offsetHeight);
  };

  useEffect(() => {
    handleSize(domTarget.current);
  }, [domTarget.current?.offsetWidth]);

  useGesture(
    {
      onPinch: ({ offset: [d, a] }) => {
        if (d > 1 && d <= 120) {
          scale.set(1 + d / 200);
        }

        if (isOpen === false && d >= 100) {
          setOpen(true);
        } else if (isOpen === true && d <= 100) {
          setOpen(false);
        }
      },

      onPinchEnd: ({ offset: [d, a] }) => {
        scale.set(1);
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <div className={`${styles.imageContainer} ${isOpen ? styles.open : ""}`}>
      <div className={`${styles.imageWrapper}`}>
        <img {...props} className={styles.backgroundImage} />
        <caption className={styles.lightboxCaption}>
          <div>{props.title}</div>
        </caption>
        <div
          className={styles.closeOverlay}
          onClick={() => setOpen(false)}
          onTouchEnd={() =>
            setTimeout(() => {
              setOpen(false);
            }, 1300)
          }
        />
        <motion.div
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={transition}
          className={styles.shade}
          onClick={() => setOpen(false)}
        ></motion.div>
        <motion.img
          {...props}
          ref={domTarget}
          className={styles.activeImage}
          onClick={() => setOpen(!isOpen)}
          layout
          style={{ scale }}
        />
      </div>
    </div>
  );
};

export default Lightbox;
