/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../store/actionCreators';

export const useActions = (): ActionCreatorsMapObject => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};
