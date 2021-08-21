/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Divider, Switch, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Notifications: FC = () => {
  const { user } = useTypedSelector((state) => state);

  // TODO: Fix using state for notifications settings
  return (
    <div>
      <Typography variant="h5">Notifications settings</Typography>
      <Divider />
      <Typography variant="h6">Mobile push notification</Typography>
      <Typography variant="body2" color="text.disabled">
        Receive push notifications on mentions and comments via your mobile app.
      </Typography>
      <Switch size="small" checked={user.notifications.mobileNotifications} />
      <Divider />
      <Typography variant="h6">Email notification</Typography>
      <Typography variant="body2" color="text.disabled">
        Receive email updates on mentions, comments, and edit digests for all the pages you have
        followed.
      </Typography>
      <Switch size="small" checked={user.notifications.emailNotifications} />
      <Divider />
      <Typography variant="h6">Desktop notification</Typography>
      <Typography variant="body2" color="text.disabled">
        Receive notifications on mentions, comments, and edit digests for all the pages you have
        followed in desktop app.
      </Typography>
      <Switch size="small" checked={user.notifications.desktopNotifications} />
    </div>
  );
};

export { Notifications };
