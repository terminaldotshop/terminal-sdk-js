// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as UserAPI from './user';

export class UserResource extends APIResource {}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;
}

export namespace UserResource {
  export import User = UserAPI.User;
}
