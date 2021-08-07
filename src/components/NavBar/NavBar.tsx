/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC } from 'react';
import { AppBar, Button, IconButton, Toolbar, Divider, Box, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const NavBar: FC = () => {
  const { user } = useTypedSelector((state) => state);
  const { authUser, fetchUser } = useActions();

  const loginHandler = async () => {
    await fetchUser();
    authUser();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {user.isAuth && (
            <IconButton edge="start" color="inherit" size="large">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h5" color="primary" sx={{ flexGrow: 1 }}>
            FPMS
          </Typography>
          {user.isAuth ? (
            <div>
              <IconButton size="large" color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
              <Button onClick={loginHandler} color="secondary">
                Login
              </Button>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Button>Register</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { NavBar };
