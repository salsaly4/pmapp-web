/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { CssBaseline, useMediaQuery } from '@material-ui/core';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.module.css';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { useActions } from './hooks/useActions';
import { Home } from './pages/Home';
import { Main } from './pages/Main';
import { UserPreferences } from './pages/UserPreferences';
import { ThemeTypography } from './utils/muitheme';

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
              <Route path="/userprefs">
                <UserPreferences />
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
