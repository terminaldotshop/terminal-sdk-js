// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Cart extends APIResource {
  /**
   * Get the current user's cart.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CartListResponse> {
    return this._client.get('/cart', options);
  }

  /**
   * Set the shipping address for the current user's cart.
   */
  setAddress(
    body: CartSetAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CartSetAddressResponse> {
    return this._client.put('/cart/address', { body, ...options });
  }

  /**
   * Set the credit card for the current user's cart.
   */
  setCard(body: CartSetCardParams, options?: Core.RequestOptions): Core.APIPromise<CartSetCardResponse> {
    return this._client.put('/cart/card', { body, ...options });
  }

  /**
   * Add an item to the current user's cart.
   */
  setItem(body: CartSetItemParams, options?: Core.RequestOptions): Core.APIPromise<CartSetItemResponse> {
    return this._client.put('/cart/item', { body, ...options });
  }
}

export interface CartListResponse {
  /**
   * The current Terminal shop user's cart.
   */
  data: Shared.Cart;
}

export interface CartSetAddressResponse {
  data: 'ok';
}

export interface CartSetCardResponse {
  data: 'ok';
}

export interface CartSetItemResponse {
  /**
   * The current Terminal shop user's cart.
   */
  data: Shared.Cart;
}

export interface CartSetAddressParams {
  /**
   * ID of the shipping address to set for the current user's cart.
   */
  addressID: string;
}

export interface CartSetCardParams {
  /**
   * ID of the credit card to set for the current user's cart.
   */
  cardID: string;
}

export interface CartSetItemParams {
  /**
   * ID of the product variant to add to the cart.
   */
  productVariantID: string;

  /**
   * Quantity of the item to add to the cart.
   */
  quantity: number;
}

export declare namespace Cart {
  export {
    type CartListResponse as CartListResponse,
    type CartSetAddressResponse as CartSetAddressResponse,
    type CartSetCardResponse as CartSetCardResponse,
    type CartSetItemResponse as CartSetItemResponse,
    type CartSetAddressParams as CartSetAddressParams,
    type CartSetCardParams as CartSetCardParams,
    type CartSetItemParams as CartSetItemParams,
  };
}
