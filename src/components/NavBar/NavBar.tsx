/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import styles from './NavBar.module.css';

const NavBar: FC = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__content}>
      <div className={styles.navbar__logo}>FPM</div>
      <div className={styles.navbar__menu}>
        <Button color="secondary" size="small" component={NavLink} to="/main">
          Login
        </Button>
        <Button variant="outlined" color="primary" size="small" component={NavLink} to="/">
          Register
        </Button>
      </div>
    </div>
  </div>
);

export { NavBar };
