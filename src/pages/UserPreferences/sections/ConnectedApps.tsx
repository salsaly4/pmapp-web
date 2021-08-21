/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Divider, Typography } from '@material-ui/core';
import React, { FC } from 'react';

const ConnectedApps: FC = () => (
  <div>
    <Typography variant="h6">Connected Apps</Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      Manage your connected applications
    </Typography>
    <Divider />
  </div>
);

export { ConnectedApps };
