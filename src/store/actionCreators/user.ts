/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Dispatch } from 'redux';
import axios from 'axios';
import { IUserState, UserAction, UserActionTypes } from '../../types/user';

export const loadUser =
  () =>
  async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const response = await axios.get('http://localhost:3004/users');
      if (response.data) {
        console.log(response.data);
        // dispatch({
        //   type: UserActionTypes.FETCH_USER_SUCCESS,
        //   payload: <IUserState>JSON.parse(response.data),
        // });
      }
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error loading user.' });
    }
  };

export const saveUser =
  (user: IUserState) =>
  (dispatch: Dispatch<UserAction>): void => {
    try {
      dispatch({ type: UserActionTypes.SAVE_USER });
      localStorage.setItem('fpms_user', JSON.stringify(user));
      dispatch({ type: UserActionTypes.SAVE_USER_SUCCESS });
    } catch (e) {
      dispatch({ type: UserActionTypes.SAVE_USER_ERROR, payload: 'Error saving user.' });
    }
  };
