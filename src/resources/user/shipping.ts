// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Shipping extends APIResource {
  /**
   * Create and add a shipping address to the current user.
   */
  create(body: ShippingCreateParams, options?: Core.RequestOptions): Core.APIPromise<ShippingCreateResponse> {
    return this._client.post('/user/shipping', { body, ...options });
  }

  /**
   * Get the shipping addresses associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ShippingListResponse> {
    return this._client.get('/user/shipping', options);
  }

  /**
   * Delete a shipping address from the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<ShippingDeleteResponse> {
    return this._client.delete(`/user/shipping/${id}`, options);
  }
}

export interface ShippingCreateResponse {
  /**
   * Shipping address ID.
   */
  data: string;
}

export interface ShippingListResponse {
  /**
   * Shipping addresses.
   */
  data: Array<ShippingListResponse.Data>;
}

export namespace ShippingListResponse {
  /**
   * Shipping address associated with a Terminal shop user.
   */
  export interface Data {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * A physical address for shipping that sweet, sweet coffee to people's doorstep.
     */
    address: Shared.Address;
  }
}

export interface ShippingDeleteResponse {
  data: 'ok';
}

export interface ShippingCreateParams {
  /**
   * City of the address.
   */
  city: string;

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

export declare namespace Shipping {
  export {
    type ShippingCreateResponse as ShippingCreateResponse,
    type ShippingListResponse as ShippingListResponse,
    type ShippingDeleteResponse as ShippingDeleteResponse,
    type ShippingCreateParams as ShippingCreateParams,
  };
}
