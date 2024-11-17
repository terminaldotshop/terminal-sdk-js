// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
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

  update(body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<UserUpdateResponse> {
    return this._client.put('/user/me', { body, ...options });
  }

  init(options?: Core.RequestOptions): Core.APIPromise<UserInitResponse> {
    return this._client.get('/user/init', options);
  }

  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface UserUpdateResponse {
  result: Shared.User;
}

export interface UserInitResponse {
  result: UserInitResponse.Result;
}

export namespace UserInitResponse {
  export interface Result {
    addresses: Array<Shared.Shipping>;

    cards: Array<Shared.Card>;

    cart: Shared.Cart;

    orders: Array<Shared.Order>;

    products: Array<Shared.Product>;

    subscriptions: Array<Shared.Subscription>;

    user: Shared.User;
  }
}

export interface UserMeResponse {
  result: Shared.User;
}

export interface UserUpdateParams {
  id: string;

  email?: string | null;

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
