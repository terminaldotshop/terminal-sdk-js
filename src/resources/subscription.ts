// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class SubscriptionResource extends APIResource {
  /**
   * Create a subscription for the current user.
   */
  create(
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/subscription', { body, ...options });
  }

  /**
   * List the subscriptions associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SubscriptionListResponse> {
    return this._client.get('/subscription', options);
  }

  /**
   * Cancel a subscription for the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(`/subscription/${id}`, options);
  }

  /**
   * Get the subscription with the given ID.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionGetResponse> {
    return this._client.get(`/subscription/${id}`, options);
  }
}

/**
 * Subscription to a Terminal shop product.
 */
export interface Subscription {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * ID of the shipping address used for the subscription.
   */
  addressID: string;

  /**
   * ID of the card used for the subscription.
   */
  cardID: string;

  /**
   * ID of the product variant being subscribed to.
   */
  productVariantID: string;

  /**
   * Quantity of the subscription.
   */
  quantity: number;

  /**
   * Next shipment and billing date for the subscription.
   */
  next?: string;

  /**
   * Schedule of the subscription.
   */
  schedule?: Subscription.Fixed | Subscription.Weekly;
}

export namespace Subscription {
  export interface Fixed {
    type: 'fixed';
  }

  export interface Weekly {
    interval: number;

    type: 'weekly';
  }
}

export interface SubscriptionCreateResponse {
  data: 'ok';
}

export interface SubscriptionListResponse {
  /**
   * List of subscriptions.
   */
  data: Array<Subscription>;
}

export interface SubscriptionDeleteResponse {
  data: 'ok';
}

export interface SubscriptionGetResponse {
  /**
   * Subscription to a Terminal shop product.
   */
  data: Subscription;
}

export interface SubscriptionCreateParams {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * ID of the shipping address used for the subscription.
   */
  addressID: string;

  /**
   * ID of the card used for the subscription.
   */
  cardID: string;

  /**
   * ID of the product variant being subscribed to.
   */
  productVariantID: string;

  /**
   * Quantity of the subscription.
   */
  quantity: number;

  /**
   * Next shipment and billing date for the subscription.
   */
  next?: string;

  /**
   * Schedule of the subscription.
   */
  schedule?: SubscriptionCreateParams.Fixed | SubscriptionCreateParams.Weekly;
}

export namespace SubscriptionCreateParams {
  export interface Fixed {
    type: 'fixed';
  }

  export interface Weekly {
    interval: number;

    type: 'weekly';
  }
}

export declare namespace SubscriptionResource {
  export {
    type Subscription as Subscription,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
