/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { IUserState, UserAction, UserActionTypes } from '../../types/user';

const initialState: IUserState = {
  id: '',
  firstName: '',
  lastName: '',
};

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER_ID:
      return { ...state, id: action.payload };
    case UserActionTypes.SET_USER_NAME:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName };
    default:
      return state;
  }
};
