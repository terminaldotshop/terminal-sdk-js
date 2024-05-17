// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as CartAPI from '@terminal/sdk/resources/cart';

export class Cart extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CartListResponse> {
    return this._client.get('/cart', options);
  }

  setItem(body: CartSetItemParams, options?: Core.RequestOptions): Core.APIPromise<CartSetItemResponse> {
    return this._client.put('/cart', { body, ...options });
  }
}

export interface CartListResponse {
  result: CartListResponse.Result;
}

export namespace CartListResponse {
  export interface Result {
    items: Array<Result.Item>;

    subtotal: number;

    shippingID?: string;
  }

  export namespace Result {
    export interface Item {
      id: string;

      productVariantID: string;

      quantity: number;

      subtotal: number;
    }
  }
}

export interface CartSetItemResponse {
  result: Array<CartSetItemResponse.Result>;
}

export namespace CartSetItemResponse {
  export interface Result {
    id: string;

    productVariantID: string;

    quantity: number;

    subtotal: number;
  }
}

export interface CartSetItemParams {
  productVariantID: string;

  quantity: number;
}

export namespace Cart {
  export import CartListResponse = CartAPI.CartListResponse;
  export import CartSetItemResponse = CartAPI.CartSetItemResponse;
  export import CartSetItemParams = CartAPI.CartSetItemParams;
}
