// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'terminal/core';
import { APIResource } from 'terminal/resource';
import * as UserAPI from 'terminal/resources/user';

export class UserResource extends APIResource {
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<UserRetrieveResponse> {
    return this._client.get(`/user/${id}`, options);
  }
}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string;
}

export interface UserRetrieveResponse {
  result: User;
}

export namespace UserResource {
  export import User = UserAPI.User;
  export import UserRetrieveResponse = UserAPI.UserRetrieveResponse;
}
