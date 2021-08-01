import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__content}>
      <div className={styles.navbar__logo}>FPM</div>
      <div className={styles.navbar__menu}>
        <a className={styles.navbar__menuitem} href="#login">
          Login
        </a>
        <div className={styles.navbar__menusep}>|</div>
        <a className={styles.navbar__menuitem} href="#register">
          Register
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
