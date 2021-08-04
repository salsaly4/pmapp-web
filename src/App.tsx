/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { muitheme } from './utils/muitheme';
import styles from './App.module.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Main } from './pages/Main';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={muitheme}>
      <BrowserRouter>
        <div className={styles.App}>
          <header className="App-header">
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export { App };
