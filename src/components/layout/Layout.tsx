import React from 'react';
import Header from '../layout/Header/Header'
import styles from './Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    
  </div>
);

export default Layout;