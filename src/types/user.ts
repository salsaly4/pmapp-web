/*
 * Copyright (c) Alexander Bulanov 2021.
 */

interface IConnectedApp {
  id: string;
  title: string;
  token: string;
}

export interface IUserState {
  id: string;
  email: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  avatar: string;
  supportAccess: boolean;
  notifications: {
    mobileNotifications: boolean;
    desktopNotifications: boolean;
    emailNotifications: boolean;
  };
  connectedApps: IConnectedApp[];
}

export enum UserActionTypes {
  SET_USER_ID = 'SET_USER_ID',
  SET_USER_NAME = 'SET_USER_NAME',
}

interface SetUserIdAction {
  type: UserActionTypes.SET_USER_ID;
  payload: string;
}

interface SetUserName {
  type: UserActionTypes.SET_USER_NAME;
  payload: {
    firstName: string;
    lastName: string;
  };
}

export type UserAction = SetUserIdAction | SetUserName;
