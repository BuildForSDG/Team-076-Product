import React from "react";
import styles from "./Features.module.css";
import sidepicture from "../../assets/landpageimg.svg"
import cx from 'classnames'

function Features() {
  return (
    <div className={cx(styles.info,styles.grid)}>
      <div className={cx(styles.wawu)}>
        <h1>
          We are empowering
          <br />
          farming communities
          <br />
          to help each other.
        </h1>
      </div>
      <div className={cx(styles.sidepic)}>
        <img src={sidepicture} />
      </div>
    </div>
  );
}

export default Features;
