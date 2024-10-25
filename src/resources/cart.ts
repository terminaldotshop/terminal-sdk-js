// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CartAPI from './cart';
import * as Shared from './shared';

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
  export type CartListResponse = CartAPI.CartListResponse;
  export type CartSetCardResponse = CartAPI.CartSetCardResponse;
  export type CartSetItemResponse = CartAPI.CartSetItemResponse;
  export type CartSetShippingResponse = CartAPI.CartSetShippingResponse;
  export type CartSetCardParams = CartAPI.CartSetCardParams;
  export type CartSetItemParams = CartAPI.CartSetItemParams;
  export type CartSetShippingParams = CartAPI.CartSetShippingParams;
}
