/*
 * Copyright (c) Alexander Bulanov 2021.
 */

/*
 * ALPHA: Boilerplate code
 * Represents external app connection
 */
interface IConnectedApp {
  id: string;
  title: string;
  token: string;
}

/*
 * Type for user name
 */
interface IUserName {
  firstName: string;
  lastName: string;
}

/*
 * Type for notifications
 */
interface INotifications {
  mobileNotifications: boolean;
  desktopNotifications: boolean;
  emailNotifications: boolean;
}

/*
 * BETA: subject for implementation
 * Represents User state
 *
 */
export interface IUserState {
  id: string;
  email: string;
  fullName: IUserName;
  avatar: string;
  supportAccess: boolean;
  notifications: INotifications;
  connectedApps: IConnectedApp[];
  /*
   * Internal properties
   */
  isAuth: boolean;
  loading: boolean;
  saved: boolean;
  error: boolean;
}

/*
 * BETA: for use in role management
 */
export interface IUser {
  id: string;
  role: UserRoles;
}

/*
 * Describes user roles for internal authorization
 */
export enum UserRoles {
  owner = 0,
  admin = 10,
  manager = 20,
  editor = 30,
  viewer = 40,
}

/*
 * User action types
 */
export enum UserActionTypes {
  AUTH_USER = 'AUTH_USER',
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
  SAVE_USER = 'SAVE_USER',
  SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS',
  SAVE_USER_ERROR = 'SAVE_USER_ERROR',
  CHANGE_NAME = 'CHANGE_NAME',
  CHANGE_AVATAR = 'CHANGE_AVATAR',
  GRANT_SUPPORT_ACCESS = 'GRANT_SUPPORT_ACCESS',
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  CONNECT_APP = 'CONNECT_APP',
  DISCONNECT_APP = 'DISCONNECT_APP',
  LOGOUT_USER = 'LOGOUT_USER',
}

interface AuthUser {
  type: UserActionTypes.AUTH_USER;
  payload: boolean;
}

interface FetchUser {
  type: UserActionTypes.FETCH_USER;
}

interface FetchUserSuccess {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: IUserState;
}

interface FetchUserError {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

interface SaveUser {
  type: UserActionTypes.SAVE_USER;
}

interface SaveUserSuccess {
  type: UserActionTypes.SAVE_USER_SUCCESS;
}

interface SaveUserError {
  type: UserActionTypes.SAVE_USER_ERROR;
  payload: string;
}

interface ChangeName {
  type: UserActionTypes.CHANGE_NAME;
  payload: IUserName;
}

interface ChangeAvatar {
  type: UserActionTypes.CHANGE_AVATAR;
  payload: string;
}

interface GrantSupportAccess {
  type: UserActionTypes.GRANT_SUPPORT_ACCESS;
  payload: boolean;
}

interface SetNotifications {
  type: UserActionTypes.SET_NOTIFICATIONS;
  payload: INotifications;
}

interface ConnectApp {
  type: UserActionTypes.CONNECT_APP;
  payload: IConnectedApp;
}

interface DisconnectApp {
  type: UserActionTypes.DISCONNECT_APP;
  payload: string;
}

interface LogoutUser {
  type: UserActionTypes.LOGOUT_USER;
}

export type UserAction =
  | AuthUser
  | FetchUser
  | FetchUserSuccess
  | FetchUserError
  | SaveUser
  | SaveUserSuccess
  | SaveUserError
  | ChangeName
  | ChangeAvatar
  | GrantSupportAccess
  | SetNotifications
  | ConnectApp
  | DisconnectApp
  | LogoutUser;
