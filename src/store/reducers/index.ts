/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
