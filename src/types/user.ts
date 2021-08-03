/*
 * Copyright (c) Alexander Bulanov 2021.
 */

export interface IUserState {
  id: string;
  firstName: string;
  lastName: string;
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
