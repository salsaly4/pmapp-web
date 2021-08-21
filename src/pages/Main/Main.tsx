/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { TAppLocation } from '../../types/location';
import styles from './Main.module.css';

const Main: FC = () => {
  const { setAppLocation } = useActions();

  useEffect(() => {
    setAppLocation(TAppLocation.PAGE_MAIN);
  }, []);

  return <div className={styles.main}>Logged in.</div>;
};

export { Main };
