// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as UsersAPI from './users';
import * as AddressesAPI from './addresses';
import * as CardsAPI from './cards';
import * as CartAPI from './cart';
import * as OrdersAPI from './orders';
import * as ProductsAPI from './products';
import * as SubscriptionsAPI from './subscriptions';

export class Users extends APIResource {
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
    return this._client.put('/users/me', { body, ...options });
  }

  /**
   * Get initial app data, including user, products, cart, addresses, cards,
   * subscriptions, and orders.
   */
  init(options?: Core.RequestOptions): Core.APIPromise<UserInitResponse> {
    return this._client.get('/users/init', options);
  }

  /**
   * Get the current user.
   */
  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/users/me', options);
  }
}

/**
 * A Terminal shop user. (We have users, btw.)
 */
export interface User {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Email address of the user.
   */
  email: string | null;

  /**
   * The user's fingerprint, derived from their public SSH key.
   */
  fingerprint: string | null;

  /**
   * Name of the user.
   */
  name: string | null;

  /**
   * Stripe customer ID of the user.
   */
  stripeCustomerID: string;
}

export interface UserUpdateResponse {
  /**
   * A Terminal shop user. (We have users, btw.)
   */
  data: User;
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
    addresses: Array<AddressesAPI.Address>;

    cards: Array<CardsAPI.Card>;

    /**
     * The current Terminal shop user's cart.
     */
    cart: CartAPI.Cart;

    orders: Array<OrdersAPI.Order>;

    products: Array<ProductsAPI.Product>;

    subscriptions: Array<SubscriptionsAPI.Subscription>;

    /**
     * A Terminal shop user. (We have users, btw.)
     */
    user: UsersAPI.User;
  }
}

export interface UserMeResponse {
  /**
   * A Terminal shop user. (We have users, btw.)
   */
  data: User;
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

export declare namespace Users {
  export {
    type User as User,
    type UserUpdateResponse as UserUpdateResponse,
    type UserInitResponse as UserInitResponse,
    type UserMeResponse as UserMeResponse,
    type UserUpdateParams as UserUpdateParams,
  };
}
