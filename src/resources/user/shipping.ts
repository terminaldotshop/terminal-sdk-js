// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@terminal/sdk/resource';
import * as Core from '@terminal/sdk/core';
import * as ShippingAPI from '@terminal/sdk/resources/user/shipping';
import * as Shared from '@terminal/sdk/resources/shared';

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

  province: string;

  street1: string;

  zip: string;

  phone?: string;

  street2?: string;
}

export namespace Shipping {
  export import ShippingCreateResponse = ShippingAPI.ShippingCreateResponse;
  export import ShippingListResponse = ShippingAPI.ShippingListResponse;
  export import ShippingDeleteResponse = ShippingAPI.ShippingDeleteResponse;
  export import ShippingCreateParams = ShippingAPI.ShippingCreateParams;
}
