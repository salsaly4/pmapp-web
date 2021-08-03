import React, { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => (
  <div className={styles.footer}>
    <hr className={styles.footerDivider} />
    <div className={styles.footerContent}>
      <div className={styles.copyright}>&copy; 2021 Flexoprom LLC</div>
    </div>
  </div>
);

export { Footer };
