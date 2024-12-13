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
   * Get initial app data, including user, products, cart, addresses, cards,
   * subscriptions, and orders.
   */
  init(options?: Core.RequestOptions): Core.APIPromise<UserInitResponse> {
    return this._client.get('/user/init', options);
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

export interface UserInitResponse {
  /**
   * Initial app data.
   */
  data: UserInitResponse.Data;
}

export namespace UserInitResponse {
  /**
   * Initial app data.
   */
  export interface Data {
    addresses: Array<Shared.Address>;

    cards: Array<Shared.Card>;

    /**
     * The current Terminal shop user's cart.
     */
    cart: Shared.Cart;

    orders: Array<Shared.Order>;

    products: Array<Shared.Product>;

    subscriptions: Array<Shared.Subscription>;

    /**
     * A Terminal shop user. (We have users, btw.)
     */
    user: Shared.User;
  }
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
    type UserInitResponse as UserInitResponse,
    type UserMeResponse as UserMeResponse,
    type UserUpdateParams as UserUpdateParams,
  };
}
