/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AppsOutlined,
  NotificationsOutlined,
  PermIdentityOutlined,
  SettingsBrightnessOutlined,
} from '@material-ui/icons';

import React, { FC, useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TAppLocation } from '../../types/location';
import { Appearance } from './sections/Appearance';
import { ConnectedApps } from './sections/ConnectedApps';
import { Notifications } from './sections/Notifications';
import { Profile } from './sections/Profile';

const UserPreferences: FC = () => {
  const { user } = useTypedSelector((state) => state);
  const [section, setSection] = useState('profile');
  const { setAppLocation } = useActions();

  const drawerWidth = 240;

  useEffect(() => {
    setAppLocation(TAppLocation.DIALOG_USERPREFS);
  }, []);

  const selectSection = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    selected: string,
  ): void => {
    switch (selected) {
      case 'profile':
        setSection('profile');
        break;
      case 'appearance':
        setSection('appearance');
        break;
      case 'notifications':
        setSection('notifications');
        break;
      case 'apps':
        setSection('apps');
        break;
      default:
        setSection('profile');
    }
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h5">{user.email}</Typography>
          </Toolbar>
          <Divider />
          <List>
            <ListItemButton onClick={(event) => selectSection(event, 'profile')} key="profile">
              <ListItemIcon>
                <PermIdentityOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile info" />
            </ListItemButton>
            <ListItemButton
              onClick={(event) => selectSection(event, 'appearance')}
              key="appearance"
            >
              <ListItemIcon>
                <SettingsBrightnessOutlined />
              </ListItemIcon>
              <ListItemText primary="Appearance" />
            </ListItemButton>
            <ListItemButton
              onClick={(event) => selectSection(event, 'notifications')}
              key="notifications"
            >
              <ListItemIcon>
                <NotificationsOutlined />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItemButton>
            <ListItemButton onClick={(event) => selectSection(event, 'apps')} key="apps">
              <ListItemIcon>
                <AppsOutlined />
              </ListItemIcon>
              <ListItemText primary="Connected Apps" />
            </ListItemButton>
          </List>
          <Button
            sx={{
              margin: 2,
            }}
            variant="outlined"
          >
            Update
          </Button>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          {(() => {
            switch (section) {
              case 'profile':
                return <Profile />;
              case 'appearance':
                return <Appearance />;
              case 'notifications':
                return <Notifications />;
              case 'apps':
                return <ConnectedApps />;
              default:
                return <Profile />;
            }
          })()}
        </Box>
      </Box>
    </div>
  );
};

export { UserPreferences };
