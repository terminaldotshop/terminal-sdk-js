// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Order extends APIResource {
  /**
   * Create an order from the current user's cart.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    return this._client.post('/order', options);
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

export interface OrderCreateResponse {
  /**
   * An order from the Terminal shop.
   */
  data: Shared.Order;
}

export interface OrderListResponse {
  /**
   * List of orders.
   */
  data: Array<Shared.Order>;
}

export interface OrderGetResponse {
  /**
   * An order from the Terminal shop.
   */
  data: Shared.Order;
}

export declare namespace Order {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderGetResponse as OrderGetResponse,
  };
}
