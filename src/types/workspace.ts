/*
 * Copyright (c) Alexander Bulanov 2021.
 */

import { IUser } from './user';

/*
 * BETA: subject for implementation
 * Type for workspaces
 */
export interface IWorkspace {
  id: string;
  wName: string;
  icon: string;
  domain: string;
  members: [id: IUser];
  shareLink: string;
}
