/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@material-ui/core/styles';
import { ThemeTypography } from './utils/muitheme';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import './App.module.css';
import { useActions } from './hooks/useActions';

function App(): React.ReactElement {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        typography: ThemeTypography,
      }),
    [prefersDarkMode],
  );

  const { loadUser } = useActions();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div>
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
    </StyledEngineProvider>
  );
}

export { App };
