// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as OrderAPI from './order';
import * as Shared from './shared';

export class Order extends APIResource {
  create(options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    return this._client.post('/order', options);
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<OrderGetResponse> {
    return this._client.get(`/order/${id}`, options);
  }
}

export interface OrderCreateResponse {
  result: Shared.Order;
}

export interface OrderGetResponse {
  result: Shared.Order;
}

export namespace Order {
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrderGetResponse = OrderAPI.OrderGetResponse;
}
