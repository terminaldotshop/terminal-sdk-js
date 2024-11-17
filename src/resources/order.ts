// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Order extends APIResource {
  create(options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    return this._client.post('/order', options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<OrderListResponse> {
    return this._client.get('/order', options);
  }

  get(id: string, options?: Core.RequestOptions): Core.APIPromise<OrderGetResponse> {
    return this._client.get(`/order/${id}`, options);
  }
}

export interface OrderCreateResponse {
  result: Shared.Order;
}

export interface OrderListResponse {
  result: Array<Shared.Order>;
}

export interface OrderGetResponse {
  result: Shared.Order;
}

export declare namespace Order {
  export {
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderGetResponse as OrderGetResponse,
  };
}
