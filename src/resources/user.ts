// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@terminal/sdk/resource';
import * as UserAPI from '@terminal/sdk/resources/user';

export class UserResource extends APIResource {}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;
}

export namespace UserResource {
  export import User = UserAPI.User;
}
