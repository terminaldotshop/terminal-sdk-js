// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as ShippingAPI from '@terminal/sdk/resources/user/shipping';

export class Shipping extends APIResource {
  create(body: ShippingCreateParams, options?: Core.RequestOptions): Core.APIPromise<ShippingCreateResponse> {
    return this._client.post('/user/shipping', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<ShippingListResponse> {
    return this._client.get('/user/shipping', options);
  }

  delete(
    id: string,
    body: ShippingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ShippingDeleteResponse> {
    return this._client.delete(`/user/shipping/${id}`, { body, ...options });
  }
}

export interface ShippingCreateResponse {
  result: Array<ShippingCreateResponse.Result>;
}

export namespace ShippingCreateResponse {
  export interface Result {
    id: string;

    address: Result.Address;
  }

  export namespace Result {
    export interface Address {
      city: string;

      country: string;

      name: string;

      province: string;

      street1: string;

      zip: string;

      street2?: string;
    }
  }
}

export interface ShippingListResponse {
  result: Array<ShippingListResponse.Result>;
}

export namespace ShippingListResponse {
  export interface Result {
    id: string;

    address: Result.Address;
  }

  export namespace Result {
    export interface Address {
      city: string;

      country: string;

      name: string;

      province: string;

      street1: string;

      zip: string;

      street2?: string;
    }
  }
}

export interface ShippingDeleteResponse {
  result: Array<ShippingDeleteResponse.Result>;
}

export namespace ShippingDeleteResponse {
  export interface Result {
    id: string;

    address: Result.Address;
  }

  export namespace Result {
    export interface Address {
      city: string;

      country: string;

      name: string;

      province: string;

      street1: string;

      zip: string;

      street2?: string;
    }
  }
}

export interface ShippingCreateParams {
  city: string;

  country: string;

  name: string;

  province: string;

  street1: string;

  zip: string;

  street2?: string;
}

export interface ShippingDeleteParams {
  city: string;

  country: string;

  name: string;

  province: string;

  street1: string;

  zip: string;

  street2?: string;
}

export namespace Shipping {
  export import ShippingCreateResponse = ShippingAPI.ShippingCreateResponse;
  export import ShippingListResponse = ShippingAPI.ShippingListResponse;
  export import ShippingDeleteResponse = ShippingAPI.ShippingDeleteResponse;
  export import ShippingCreateParams = ShippingAPI.ShippingCreateParams;
  export import ShippingDeleteParams = ShippingAPI.ShippingDeleteParams;
}
