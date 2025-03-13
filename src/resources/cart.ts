// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as OrderAPI from './order';

export class CartResource extends APIResource {
  /**
   * Clear the current user's cart.
   */
  clear(options?: Core.RequestOptions): Core.APIPromise<CartClearResponse> {
    return this._client.delete('/cart', options);
  }

  /**
   * Convert the current user's cart to an order.
   */
  convert(body?: CartConvertParams, options?: Core.RequestOptions): Core.APIPromise<CartConvertResponse>;
  convert(options?: Core.RequestOptions): Core.APIPromise<CartConvertResponse>;
  convert(
    body: CartConvertParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CartConvertResponse> {
    if (isRequestOptions(body)) {
      return this.convert({}, body);
    }
    return this._client.post('/cart/convert', { body, ...options });
  }

  /**
   * Get the current user's cart.
   */
  get(options?: Core.RequestOptions): Core.APIPromise<CartGetResponse> {
    return this._client.get('/cart', options);
  }

  /**
   * Apply a gift card to the current user's cart.
   */
  redeemGiftCard(
    body: CartRedeemGiftCardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CartRedeemGiftCardResponse> {
    return this._client.put('/cart/gift-card', { body, ...options });
  }

  /**
   * Remove the gift card from the current user's cart.
   */
  removeGiftCard(options?: Core.RequestOptions): Core.APIPromise<CartRemoveGiftCardResponse> {
    return this._client.delete('/cart/gift-card', options);
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

/**
 * The current Terminal shop user's cart.
 */
export interface Cart {
  /**
   * The subtotal and shipping amounts for the current user's cart.
   */
  amount: Cart.Amount;

  /**
   * An array of items in the current user's cart.
   */
  items: Array<Cart.Item>;

  /**
   * The subtotal of all items in the current user's cart, in cents (USD).
   */
  subtotal: number;

  /**
   * ID of the shipping address selected on the current user's cart.
   */
  addressID?: string;

  /**
   * ID of the card selected on the current user's cart.
   */
  cardID?: string;

  /**
   * ID of the gift card applied to the current user's cart.
   */
  giftCardID?: string;

  /**
   * Shipping information for the current user's cart.
   */
  shipping?: Cart.Shipping;
}

export namespace Cart {
  /**
   * The subtotal and shipping amounts for the current user's cart.
   */
  export interface Amount {
    /**
     * Subtotal of the current user's cart, in cents (USD).
     */
    subtotal: number;

    /**
     * Amount applied from gift card on the current user's cart, in cents (USD).
     */
    giftCard?: number;

    /**
     * Shipping amount of the current user's cart, in cents (USD).
     */
    shipping?: number;

    /**
     * Total amount after gift card applied, in cents (USD).
     */
    total?: number;
  }

  /**
   * An item in the current Terminal shop user's cart.
   */
  export interface Item {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * ID of the product variant for this item in the current user's cart.
     */
    productVariantID: string;

    /**
     * Quantity of the item in the current user's cart.
     */
    quantity: number;

    /**
     * Subtotal of the item in the current user's cart, in cents (USD).
     */
    subtotal: number;
  }

  /**
   * Shipping information for the current user's cart.
   */
  export interface Shipping {
    /**
     * Shipping service name.
     */
    service?: string;

    /**
     * Shipping timeframe provided by the shipping carrier.
     */
    timeframe?: string;
  }
}

export interface CartClearResponse {
  data: 'ok';
}

export interface CartConvertResponse {
  /**
   * An order from the Terminal shop.
   */
  data: OrderAPI.Order;
}

export interface CartGetResponse {
  /**
   * The current Terminal shop user's cart.
   */
  data: Cart;
}

export interface CartRedeemGiftCardResponse {
  /**
   * Gift card redemption result
   */
  data: CartRedeemGiftCardResponse.Data;
}

export namespace CartRedeemGiftCardResponse {
  /**
   * Gift card redemption result
   */
  export interface Data {
    appliedAmount: number;

    giftCardID: string;

    remainingBalance: number;
  }
}

export interface CartRemoveGiftCardResponse {
  data: 'ok';
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
  data: Cart;
}

export interface CartConvertParams {
  recipientEmail?: string;
}

export interface CartRedeemGiftCardParams {
  giftCardID: string;
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

export declare namespace CartResource {
  export {
    type Cart as Cart,
    type CartClearResponse as CartClearResponse,
    type CartConvertResponse as CartConvertResponse,
    type CartGetResponse as CartGetResponse,
    type CartRedeemGiftCardResponse as CartRedeemGiftCardResponse,
    type CartRemoveGiftCardResponse as CartRemoveGiftCardResponse,
    type CartSetAddressResponse as CartSetAddressResponse,
    type CartSetCardResponse as CartSetCardResponse,
    type CartSetItemResponse as CartSetItemResponse,
    type CartConvertParams as CartConvertParams,
    type CartRedeemGiftCardParams as CartRedeemGiftCardParams,
    type CartSetAddressParams as CartSetAddressParams,
    type CartSetCardParams as CartSetCardParams,
    type CartSetItemParams as CartSetItemParams,
  };
}
