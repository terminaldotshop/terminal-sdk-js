// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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

export declare namespace Cart {
  export {
    type CartListResponse as CartListResponse,
    type CartSetCardResponse as CartSetCardResponse,
    type CartSetItemResponse as CartSetItemResponse,
    type CartSetShippingResponse as CartSetShippingResponse,
    type CartSetCardParams as CartSetCardParams,
    type CartSetItemParams as CartSetItemParams,
    type CartSetShippingParams as CartSetShippingParams,
  };
}
