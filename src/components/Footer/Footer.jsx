import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <hr className={styles.footerDivider} />
    <div className={styles.footerContent}>
      <div className={styles.copyright}>&copy; 2021 Flexoprom LLC</div>
    </div>
  </div>
);

export default Footer;
