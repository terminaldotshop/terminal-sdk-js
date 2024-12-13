// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class User extends APIResource {
  /**
   * Update the current user.
   */
  update(body?: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<UserUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<UserUpdateResponse>;
  update(
    body: UserUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/user/me', { body, ...options });
  }

  /**
   * Get the current user.
   */
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface UserUpdateResponse {
  /**
   * A Terminal shop user. (We have users, btw.)
   */
  data: Shared.User;
}

export interface UserMeResponse {
  /**
   * A Terminal shop user. (We have users, btw.)
   */
  data: Shared.User;
}

export interface UserUpdateParams {
  /**
   * Email address of the user.
   */
  email?: string | null;

  /**
   * Name of the user.
   */
  name?: string | null;
}

export declare namespace User {
  export {
    type UserUpdateResponse as UserUpdateResponse,
    type UserMeResponse as UserMeResponse,
    type UserUpdateParams as UserUpdateParams,
  };
}
