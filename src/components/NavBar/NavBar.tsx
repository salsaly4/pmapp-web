/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar: FC = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" size="large">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export { NavBar };
