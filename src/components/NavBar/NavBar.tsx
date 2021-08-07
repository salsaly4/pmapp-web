/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC, useState } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Divider,
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { AccountCircle } from '@material-ui/icons';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const NavBar: FC = () => {
  const { user } = useTypedSelector((state) => state);
  const { authUser, fetchUser, logoutUser } = useActions();
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logoutUser();
  };

  const handleLogin = async () => {
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
            <>
              <div>
                <IconButton onClick={handleMenu} size="large" color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
              <Button onClick={handleLogin} color="secondary">
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
