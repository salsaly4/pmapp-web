/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Dispatch } from 'redux';
import { IUserState, UserAction, UserActionTypes } from '../../types/user';

export const loadUser =
  () =>
  (dispatch: Dispatch<UserAction>): void => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const response = localStorage.getItem('fpms_user');
      if (response) {
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: <IUserState>JSON.parse(response),
        });
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
