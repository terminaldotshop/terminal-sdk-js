// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class OrderResource extends APIResource {
  /**
   * Create an order without a cart. The order will be placed immediately.
   */
  create(body: OrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    return this._client.post('/order', { body, ...options });
  }

  /**
   * List the orders associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<OrderListResponse> {
    return this._client.get('/order', options);
  }

  /**
   * Get the order with the given ID.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<OrderGetResponse> {
    return this._client.get(`/order/${id}`, options);
  }
}

/**
 * An order from the Terminal shop.
 */
export interface Order {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * The subtotal and shipping amounts of the order.
   */
  amount: Order.Amount;

  /**
   * Date the order was created.
   */
  created: string;

  /**
   * Items in the order.
   */
  items: Array<Order.Item>;

  /**
   * Shipping address of the order.
   */
  shipping: Order.Shipping;

  /**
   * Tracking information of the order.
   */
  tracking: Order.Tracking;

  /**
   * Zero-based index of the order for this user only.
   */
  index?: number;
}

export namespace Order {
  /**
   * The subtotal and shipping amounts of the order.
   */
  export interface Amount {
    /**
     * Shipping amount of the order, in cents (USD).
     */
    shipping: number;

    /**
     * Subtotal amount of the order, in cents (USD).
     */
    subtotal: number;
  }

  export interface Item {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * Amount of the item in the order, in cents (USD).
     */
    amount: number;

    /**
     * Quantity of the item in the order.
     */
    quantity: number;

    /**
     * Description of the item in the order.
     */
    description?: string;

    /**
     * ID of the product variant of the item in the order.
     */
    productVariantID?: string;
  }

  /**
   * Shipping address of the order.
   */
  export interface Shipping {
    /**
     * City of the address.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code of the address.
     */
    country: string;

    /**
     * The recipient's name.
     */
    name: string;

    /**
     * Street of the address.
     */
    street1: string;

    /**
     * Zip code of the address.
     */
    zip: string;

    /**
     * Phone number of the recipient.
     */
    phone?: string;

    /**
     * Province or state of the address.
     */
    province?: string;

    /**
     * Apartment, suite, etc. of the address.
     */
    street2?: string;
  }

  /**
   * Tracking information of the order.
   */
  export interface Tracking {
    /**
     * Tracking number of the order.
     */
    number?: string;

    /**
     * Shipping service of the order.
     */
    service?: string;

    /**
     * Current tracking status of the shipment.
     */
    status?: 'PRE_TRANSIT' | 'TRANSIT' | 'DELIVERED' | 'RETURNED' | 'FAILURE' | 'UNKNOWN';

    /**
     * Additional details about the tracking status.
     */
    statusDetails?: string;

    /**
     * When the tracking status was last updated.
     */
    statusUpdatedAt?: string;

    /**
     * Tracking URL of the order.
     */
    url?: string;
  }
}

export interface OrderCreateResponse {
  /**
   * Order ID.
   */
  data: string;
}

export interface OrderListResponse {
  /**
   * List of orders.
   */
  data: Array<Order>;
}

export interface OrderGetResponse {
  /**
   * An order from the Terminal shop.
   */
  data: Order;
}

export interface OrderCreateParams {
  /**
   * Shipping address ID.
   */
  addressID: string;

  /**
   * Card ID.
   */
  cardID: string;

  /**
   * Product variants to include in the order, along with their quantities.
   */
  variants: Record<string, number>;
}

export declare namespace OrderResource {
  export {
    type Order as Order,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderGetResponse as OrderGetResponse,
    type OrderCreateParams as OrderCreateParams,
  };
}
