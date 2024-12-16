// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AddressResource extends APIResource {
  /**
   * Create and add a shipping address to the current user.
   */
  create(body: AddressCreateParams, options?: Core.RequestOptions): Core.APIPromise<AddressCreateResponse> {
    return this._client.post('/address', { body, ...options });
  }

  /**
   * Get the shipping addresses associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AddressListResponse> {
    return this._client.get('/address', options);
  }

  /**
   * Delete a shipping address from the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<AddressDeleteResponse> {
    return this._client.delete(`/address/${id}`, options);
  }
}

/**
 * Physical address associated with a Terminal shop user.
 */
export interface Address {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

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

export interface AddressCreateResponse {
  /**
   * Shipping address ID.
   */
  data: string;
}

export interface AddressListResponse {
  /**
   * Shipping addresses.
   */
  data: Array<Address>;
}

export interface AddressDeleteResponse {
  data: 'ok';
}

export interface AddressCreateParams {
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

export declare namespace AddressResource {
  export {
    type Address as Address,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
  };
}
