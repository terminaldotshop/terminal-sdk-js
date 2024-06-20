// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as UserAPI from '@terminal/sdk/resources/user/user';
import * as ShippingAPI from '@terminal/sdk/resources/user/shipping';

export class UserResource extends APIResource {
  shipping: ShippingAPI.Shipping = new ShippingAPI.Shipping(this._client);

  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;

  stripeCustomerID: string;
}

export interface UserMeResponse {
  result: User;
}

export namespace UserResource {
  export import User = UserAPI.User;
  export import UserMeResponse = UserAPI.UserMeResponse;
  export import Shipping = ShippingAPI.Shipping;
  export import ShippingCreateResponse = ShippingAPI.ShippingCreateResponse;
  export import ShippingListResponse = ShippingAPI.ShippingListResponse;
  export import ShippingDeleteResponse = ShippingAPI.ShippingDeleteResponse;
  export import ShippingCreateParams = ShippingAPI.ShippingCreateParams;
}
