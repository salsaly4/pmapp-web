import React, { FC } from 'react';
import styles from './NavBar.module.css';

const NavBar: FC = () => (
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

export { NavBar };
