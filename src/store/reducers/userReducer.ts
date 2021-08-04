/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { IUserState, UserAction, UserActionTypes } from '../../types/user';

const initialState: IUserState = {
  id: '1',
  email: 'me@abulanov.com',
  fullName: {
    firstName: 'Alexander',
    lastName: 'Bulanov',
  },
  avatar: 'ab.jpg',
  supportAccess: false,
  notifications: {
    mobileNotifications: true,
    desktopNotifications: true,
    emailNotifications: false,
  },
  connectedApps: [],
  loading: false,
  saved: false,
  error: false,
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        error: false,
        saved: true,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case UserActionTypes.SAVE_USER:
      return {
        ...state,
        loading: true,
        saved: false,
        error: false,
      };
    case UserActionTypes.SAVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        saved: true,
        error: false,
      };
    case UserActionTypes.SAVE_USER_ERROR:
      return {
        ...state,
        loading: false,
        saved: false,
        error: true,
      };
    case UserActionTypes.CHANGE_NAME:
      return {
        ...state,
        fullName: action.payload,
        saved: false,
      };
    case UserActionTypes.CHANGE_AVATAR:
      return {
        ...state,
        avatar: action.payload,
        saved: false,
      };
    case UserActionTypes.GRANT_SUPPORT_ACCESS:
      return {
        ...state,
        supportAccess: action.payload,
        saved: false,
      };
    case UserActionTypes.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
        saved: false,
      };
    case UserActionTypes.CONNECT_APP:
      return {
        ...state,
        connectedApps: [...state.connectedApps, action.payload],
        saved: false,
      };
    case UserActionTypes.DISCONNECT_APP:
      return {
        ...state,
        connectedApps: state.connectedApps.filter((app) => app.id !== action.payload),
        saved: false,
      };
    default:
      return state;
  }
};
