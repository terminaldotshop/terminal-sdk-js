// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ShippingAPI from './shipping';
import * as Shared from '../shared';

export class Shipping extends APIResource {
  create(body: ShippingCreateParams, options?: Core.RequestOptions): Core.APIPromise<ShippingCreateResponse> {
    return this._client.post('/user/shipping', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ShippingListResponse> {
    return this._client.get('/user/shipping', options);
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ShippingDeleteResponse> {
    return this._client.delete(`/user/shipping/${id}`, options);
  }
}

export interface ShippingCreateResponse {
  result: string;
}

export interface ShippingListResponse {
  result: Array<Shared.Shipping>;
}

export interface ShippingDeleteResponse {
  result: 'ok';
}

export interface ShippingCreateParams {
  city: string;

  country: string;

  name: string;

  street1: string;

  zip: string;

  phone?: string;

  province?: string;

  street2?: string;
}

export namespace Shipping {
  export type ShippingCreateResponse = ShippingAPI.ShippingCreateResponse;
  export type ShippingListResponse = ShippingAPI.ShippingListResponse;
  export type ShippingDeleteResponse = ShippingAPI.ShippingDeleteResponse;
  export type ShippingCreateParams = ShippingAPI.ShippingCreateParams;
}
