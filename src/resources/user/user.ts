// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ShippingAPI from './shipping';
import {
  Shipping,
  ShippingCreateParams,
  ShippingCreateResponse,
  ShippingDeleteResponse,
  ShippingListResponse,
} from './shipping';

export class User extends APIResource {
  shipping: ShippingAPI.Shipping = new ShippingAPI.Shipping(this._client);

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
    addresses: Array<Data.Address>;

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

  export namespace Data {
    /**
     * Shipping address associated with a Terminal shop user.
     */
    export interface Address {
      /**
       * Unique object identifier. The format and length of IDs may change over time.
       */
      id: string;

      /**
       * A physical address for shipping that sweet, sweet coffee to people's doorstep.
       */
      address: Shared.Address;
    }
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

User.Shipping = Shipping;

export declare namespace User {
  export {
    type UserUpdateResponse as UserUpdateResponse,
    type UserInitResponse as UserInitResponse,
    type UserMeResponse as UserMeResponse,
    type UserUpdateParams as UserUpdateParams,
  };

  export {
    Shipping as Shipping,
    type ShippingCreateResponse as ShippingCreateResponse,
    type ShippingListResponse as ShippingListResponse,
    type ShippingDeleteResponse as ShippingDeleteResponse,
    type ShippingCreateParams as ShippingCreateParams,
  };
}
