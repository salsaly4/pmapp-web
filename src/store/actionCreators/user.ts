/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Dispatch } from 'redux';
import axios from 'axios';
import { IUserState, UserAction, UserActionTypes } from '../../types/user';

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

export const fetchUser =
  () =>
  async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const response = await axios.get<IUserState>('http://localhost:3004/user');
      if (response.data) {
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: response.data,
        });
        localStorage.setItem('fpms_user', JSON.stringify(response.data));
      }
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error loading user.' });
    }
  };

export const loadUser =
  () =>
  (dispatch: Dispatch<UserAction>): void => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USER });
      const json = localStorage.getItem('fpms_user');
      if (json) {
        const user: IUserState = <IUserState>JSON.parse(json);
        dispatch({
          type: UserActionTypes.FETCH_USER_SUCCESS,
          payload: { ...user, isAuth: true },
        });
      } else {
        dispatch({
          type: UserActionTypes.FETCH_USER_ERROR,
          payload: 'Error loading user profile.',
        });
      }
    } catch (e) {
      dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error fetching user profile.' });
    }
  };

export const authUser =
  () =>
  (dispatch: Dispatch<UserAction>): void => {
    dispatch({ type: UserActionTypes.AUTH_USER, payload: true });
  };

export const logoutUser =
  () =>
  (dispatch: Dispatch<UserAction>): void => {
    localStorage.removeItem('fpms_user');
    dispatch({ type: UserActionTypes.LOGOUT_USER });
  };
