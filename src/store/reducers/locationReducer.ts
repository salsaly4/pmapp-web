/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import {
  IAppLocation,
  LocationAction,
  LocationActionTypes,
  LocationType,
  TAppLocation,
} from '../../types/location';

const initialState: IAppLocation = {
  locationType: LocationType.PAGE,
  appLocation: TAppLocation.PAGE_HOME,
};

export const locationReducer = (state = initialState, action: LocationAction): IAppLocation => {
  switch (action.type) {
    case LocationActionTypes.SET_LOCATION_TYPE:
      return { ...state, locationType: action.payload };
    case LocationActionTypes.SET_APP_LOCATION:
      return { ...state, appLocation: action.payload };
    default:
      return state;
  }
};
