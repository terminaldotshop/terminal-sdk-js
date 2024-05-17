// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as UserAPI from '@terminal/sdk/resources/user';

export class User extends APIResource {
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface UserMeResponse {
  result: UserMeResponse.Result;
}

export namespace UserMeResponse {
  export interface Result {
    id: string;

    email: string | null;

    fingerprint: string | null;

    stripeCustomerID: string;
  }
}

export namespace User {
  export import UserMeResponse = UserAPI.UserMeResponse;
}
