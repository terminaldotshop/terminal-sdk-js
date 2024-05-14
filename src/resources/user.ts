// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as UserAPI from '@terminal/sdk/resources/user';

export class UserResource extends APIResource {
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;
}

export interface UserMeResponse {
  result: User;
}

export namespace UserResource {
  export import User = UserAPI.User;
  export import UserMeResponse = UserAPI.UserMeResponse;
}
