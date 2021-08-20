/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle, CloseOutlined } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import React, { FC, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LocationType } from '../../types/location';

const NavBar: FC = () => {
  const { user, location } = useTypedSelector((state) => state);
  const { authUser, fetchUser, logoutUser } = useActions();
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    setAnchorEl(null);
    history.push('/userprefs');
  };

  const handleLogout = () => {
    setAnchorEl(null);
    logoutUser();
    history.push('/');
  };

  const handleLogin = async () => {
    await fetchUser();
    authUser();
    history.push('/main');
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
            <Link component={RouterLink} to="/" underline="none">
              FPMS
            </Link>
          </Typography>

          {(() => {
            if (user.isAuth) {
              switch (location.locationType) {
                case LocationType.DIALOG:
                  return (
                    <>
                      <div>
                        <IconButton onClick={() => history.goBack()} size="large" color="inherit">
                          <CloseOutlined />
                        </IconButton>
                      </div>
                    </>
                  );
                default:
                  return (
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
                          horizontal: 'center',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </>
                  );
              }
            } else {
              return (
                <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                  <Button onClick={handleLogin} color="secondary">
                    Login
                  </Button>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <Button>Register</Button>
                </Box>
              );
            }
          })()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { NavBar };
