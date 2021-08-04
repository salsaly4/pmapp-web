/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: FC = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__content}>
      <div className={styles.navbar__logo}>FPM</div>
      <div className={styles.navbar__menu}>
        <NavLink className={styles.navbar__menuitem} to="/main">
          Login
        </NavLink>
        <div className={styles.navbar__menusep}>|</div>
        <NavLink className={styles.navbar__menuitem} to="/">
          Register
        </NavLink>
      </div>
    </div>
  </div>
);

export { NavBar };
