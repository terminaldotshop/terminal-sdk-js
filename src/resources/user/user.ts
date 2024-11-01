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

  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface UserUpdateResponse {
  result: Shared.User;
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
