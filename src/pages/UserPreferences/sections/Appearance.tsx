/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Divider, Grid, Switch, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Appearance: FC = () => {
  const { user } = useTypedSelector((state) => state);

  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Appearance settings
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12} mt={2}>
            <Grid item container xs={12} direction="row">
              <Grid item container xs={3} justifyContent="center">
                <Typography variant="h6">Dark theme</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" mb={4}>
              <Grid item container xs={3} justifyContent="center" mt={2} direction="column">
                <Typography variant="body2" color="text.disabled">
                  Use dark mode in FPMS
                </Typography>
              </Grid>
              <Grid item container xs={9} pl={1} pt={1}>
                <Switch checked />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { Appearance };
