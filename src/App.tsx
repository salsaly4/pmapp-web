import React from 'react';
import styles from './App.module.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App(): React.ReactElement {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <NavBar />
      </header>
      <Home />
      <Footer />
    </div>
  );
}

export { App };
