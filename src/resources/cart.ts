// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@terminal/sdk/resource';
import * as Core from '@terminal/sdk/core';
import * as CartAPI from '@terminal/sdk/resources/cart';
import * as Shared from '@terminal/sdk/resources/shared';

export class Cart extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CartListResponse> {
    return this._client.get('/cart', options);
  }

  setCard(body: CartSetCardParams, options?: Core.RequestOptions): Core.APIPromise<CartSetCardResponse> {
    return this._client.put('/cart/card', { body, ...options });
  }

  setItem(body: CartSetItemParams, options?: Core.RequestOptions): Core.APIPromise<CartSetItemResponse> {
    return this._client.put('/cart/item', { body, ...options });
  }

  setShipping(
    body: CartSetShippingParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CartSetShippingResponse> {
    return this._client.put('/cart/shipping', { body, ...options });
  }
}

export interface CartListResponse {
  result: Shared.Cart;
}

export interface CartSetCardResponse {
  result: 'ok';
}

export interface CartSetItemResponse {
  result: Shared.Cart;
}

export interface CartSetShippingResponse {
  result: 'ok';
}

export interface CartSetCardParams {
  cardID: string;
}

export interface CartSetItemParams {
  productVariantID: string;

  quantity: number;
}

export interface CartSetShippingParams {
  shippingID: string;
}

export namespace Cart {
  export import CartListResponse = CartAPI.CartListResponse;
  export import CartSetCardResponse = CartAPI.CartSetCardResponse;
  export import CartSetItemResponse = CartAPI.CartSetItemResponse;
  export import CartSetShippingResponse = CartAPI.CartSetShippingResponse;
  export import CartSetCardParams = CartAPI.CartSetCardParams;
  export import CartSetItemParams = CartAPI.CartSetItemParams;
  export import CartSetShippingParams = CartAPI.CartSetShippingParams;
}
