/*
 * Copyright (c) Alexander Bulanov 2021.
 */

export interface IAppLocation {
  appLocation: TAppLocation;
  locationType: LocationType;
}

export enum TAppLocation {
  // Pages
  PAGE_HOME = 'PAGE_HOME',
  PAGE_MAIN = 'PAGE_MAIN',

  // Dialogs
  DIALOG_USERPREFS = 'DIALOG_USERPREFS',
}

export enum LocationType {
  PAGE = 'PAGE',
  DIALOG = 'DIALOG',
}

export enum LocationActionTypes {
  /*
Internal actions
 */
  SET_LOCATION_TYPE = 'SET_LOCATION_TYPE',
  SET_APP_LOCATION = 'SET_APP_LOCATION',
}

interface SetLocationType {
  type: LocationActionTypes.SET_LOCATION_TYPE;
  payload: LocationType;
}

interface SetAppLocation {
  type: LocationActionTypes.SET_APP_LOCATION;
  payload: TAppLocation;
}

export type LocationAction = SetLocationType | SetAppLocation;
