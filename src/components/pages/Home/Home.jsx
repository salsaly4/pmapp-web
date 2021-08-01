import React from "react";
import styles from "./Home.module.css";
import pm from "./pm.jpg";

const Home = () => (
  <div className={styles.main}>
    <div className={styles.main__content}>
      <div className={styles.descphoto}>
        <img src={pm} width="400" height="500" alt="Project management" />
      </div>
      <div className={styles.desctext}>
        <p>Description text. Lorem ipsum.</p>
      </div>
    </div>
  </div>
);

export default Home;
