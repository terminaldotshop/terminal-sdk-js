// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@terminal/sdk/resource';
import * as Core from '@terminal/sdk/core';
import * as UserAPI from '@terminal/sdk/resources/user/user';
import * as Shared from '@terminal/sdk/resources/shared';
import * as ShippingAPI from '@terminal/sdk/resources/user/shipping';

export class User extends APIResource {
  shipping: ShippingAPI.Shipping = new ShippingAPI.Shipping(this._client);

  me(options?: Core.RequestOptions): Core.APIPromise<UserMeResponse> {
    return this._client.get('/user/me', options);
  }
}

export interface UserMeResponse {
  result: Shared.User;
}

export namespace User {
  export import UserMeResponse = UserAPI.UserMeResponse;
  export import Shipping = ShippingAPI.Shipping;
  export import ShippingCreateResponse = ShippingAPI.ShippingCreateResponse;
  export import ShippingListResponse = ShippingAPI.ShippingListResponse;
  export import ShippingDeleteResponse = ShippingAPI.ShippingDeleteResponse;
  export import ShippingCreateParams = ShippingAPI.ShippingCreateParams;
}
