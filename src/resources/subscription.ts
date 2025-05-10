// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class SubscriptionResource extends APIResource {
  /**
   * Create a subscription for the current user.
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.create({
   *   id: 'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
   *   addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',
   *   cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',
   *   created: '2024-06-29T19:36:19.000Z',
   *   price: 2200,
   *   productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',
   *   quantity: 1,
   * });
   * ```
   */
  create(
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return this._client.post('/subscription', { body, ...options });
  }

  /**
   * Update card, address, or interval for an existing subscription.
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.update(
   *   'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
   * );
   * ```
   */
  update(
    id: string,
    body?: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionUpdateResponse>;
  update(
    id: string,
    body: SubscriptionUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.put(`/subscription/${id}`, { body, ...options });
  }

  /**
   * List the subscriptions associated with the current user.
   *
   * @example
   * ```ts
   * const subscriptions = await client.subscription.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<SubscriptionListResponse> {
    return this._client.get('/subscription', options);
  }

  /**
   * Cancel a subscription for the current user.
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.delete(
   *   'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
   * );
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(`/subscription/${id}`, options);
  }

  /**
   * Get the subscription with the given ID.
   *
   * @example
   * ```ts
   * const subscription = await client.subscription.get(
   *   'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
   * );
   * ```
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
   * Date the subscription was created.
   */
  created: string;

  /**
   * Price of the subscription in cents (USD).
   */
  price: number;

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

export interface SubscriptionUpdateResponse {
  /**
   * Subscription to a Terminal shop product.
   */
  data: Subscription;
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
   * Date the subscription was created.
   */
  created: string;

  /**
   * Price of the subscription in cents (USD).
   */
  price: number;

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

export interface SubscriptionUpdateParams {
  /**
   * New shipping address ID for the subscription.
   */
  addressID?: string;

  /**
   * New payment method ID for the subscription.
   */
  cardID?: string;

  /**
   * New schedule for the subscription.
   */
  schedule?: SubscriptionUpdateParams.Fixed | SubscriptionUpdateParams.Weekly;
}

export namespace SubscriptionUpdateParams {
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
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
  };
}
