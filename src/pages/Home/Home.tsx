/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import styles from './Home.module.css';
import pm from './pm.jpg';

const Home: FC = () => (
  <div className={styles.main}>
    <div className={styles.main__content}>
      <div className={styles.descphoto}>
        <img src={pm} width="400" height="500" alt="Project management" />
      </div>
      <Typography variant="h1">Lorem ipsuM.</Typography>
    </div>
  </div>
);

export { Home };
