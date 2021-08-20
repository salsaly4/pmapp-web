/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import * as UserActionCreators from './user';
import * as LocationActionCreators from './location';

export const ActionCreators = {
  ...UserActionCreators,
  ...LocationActionCreators,
};
