// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as CartAPI from '@terminal/sdk/resources/cart';
import * as Shared from '@terminal/sdk/resources/shared';

export class Cart extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CartListResponse> {
    return this._client.get('/cart', options);
  }
}

export interface CartListResponse {
  result: Shared.Cart;
}

export namespace Cart {
  export import CartListResponse = CartAPI.CartListResponse;
}
