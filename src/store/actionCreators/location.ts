/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { Dispatch } from 'react';
import {
  LocationAction,
  LocationActionTypes,
  LocationType,
  TAppLocation,
} from '../../types/location';

export const setAppLocation =
  (location: TAppLocation) =>
  (dispatch: Dispatch<LocationAction>): void => {
    dispatch({ type: LocationActionTypes.SET_APP_LOCATION, payload: location });
    switch (location.split('_')[0]) {
      case 'DIALOG':
        dispatch({ type: LocationActionTypes.SET_LOCATION_TYPE, payload: LocationType.DIALOG });
        break;
      default:
        dispatch({ type: LocationActionTypes.SET_LOCATION_TYPE, payload: LocationType.PAGE });
    }
  };
