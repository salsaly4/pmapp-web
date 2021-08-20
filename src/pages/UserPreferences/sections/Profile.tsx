/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Avatar, Button, Divider, Grid, TextField, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Profile: FC = () => {
  const { user } = useTypedSelector((state) => state);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Profile settings
          </Typography>
          <Divider />
        </Grid>

        <Grid item xs={12} mt={2}>
          <Grid item container xs={12} direction="row">
            <Grid item container xs={3} justifyContent="center">
              <Typography variant="h6">Photo</Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} direction="row" mb={2}>
            <Grid item container xs={3} justifyContent="center">
              <Avatar sx={{ width: 80, height: 80, marginBottom: 2, marginTop: 2 }}>
                {user.fullName?.firstName[0]}
                {user.fullName?.lastName[0]}
              </Avatar>
            </Grid>
            <Grid item container xs={9} alignItems="center">
              <Button variant="outlined">Upload photo</Button>
            </Grid>
          </Grid>
          <Divider />
        </Grid>

        <Grid item xs={12} mt={2}>
          <Grid item container xs={12} direction="row">
            <Grid item container xs={3} justifyContent="center">
              <Typography variant="h6">Personal info</Typography>
            </Grid>
          </Grid>

          <Grid item container xs={12} direction="row" mb={4}>
            <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
              <Typography variant="body2" color="text.disabled" ml={2}>
                Email
              </Typography>
              <Typography variant="h6" component="p" color="text.primary" ml={2}>
                {user.email}
              </Typography>
            </Grid>
            <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
              <Button color="primary">Change email</Button>
            </Grid>
            <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
              <Typography variant="body2" color="text.disabled" ml={2}>
                Preferred name
              </Typography>
              <TextField
                required
                size="small"
                fullWidth={false}
                defaultValue={`${user.fullName?.firstName} ${user.fullName?.lastName}`}
              />
            </Grid>
            <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
              <Button color="primary">Change name</Button>
            </Grid>
          </Grid>
          <Divider />

          <Grid item xs={12} mt={2}>
            <Grid item container xs={12} direction="row">
              <Grid item container xs={3} justifyContent="center">
                <Typography variant="h6">Password</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" mb={4}>
              <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
                <Typography variant="body2" color="text.disabled">
                  You can set a permanent password if you don&apos;t want to use temporary login
                  codes.
                </Typography>
              </Grid>
              <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
                <Button variant="outlined" color="secondary">
                  Set a password
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid item xs={12} mt={2}>
            <Grid item container xs={12} direction="row">
              <Grid item container xs={3} justifyContent="center">
                <Typography variant="h6">Support access</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" mb={4}>
              <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
                <Typography variant="body2" color="text.disabled">
                  Grant FPMS support temporary access to your account so we can troubleshoot
                  problems or recover content on your behalf. You can revoke access at any time.
                </Typography>
              </Grid>
              <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
                <Button variant="outlined" color="primary">
                  Allow support access
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid item xs={12} mt={2}>
            <Grid item container xs={12} direction="row">
              <Grid item container xs={3} justifyContent="center">
                <Typography variant="h6">Log out of all devices</Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" mb={4}>
              <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
                <Typography variant="body2" color="text.disabled">
                  You will be logged out of all other active sessions besides this one and will have
                  to log back in.
                </Typography>
              </Grid>
              <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
                <Button variant="outlined" color="error">
                  Log out
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider />

          <Grid item xs={12} mt={2}>
            <Grid item container xs={12} direction="row">
              <Grid item container xs={3} justifyContent="center">
                <Typography variant="h6" color="red">
                  Danger zone
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs={12} direction="row" mb={4}>
              <Grid item container xs={5} justifyContent="center" mt={2} direction="column">
                <Typography variant="body2" color="text.disabled">
                  Completely remove your account ad all related data. WARNING! You cannot restore it
                  afterwards!
                </Typography>
              </Grid>
              <Grid item container xs={7} alignItems="center" alignContent="flex-end" pl={1}>
                <Button variant="outlined" color="error">
                  Delete my account
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export { Profile };
