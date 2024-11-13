// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Subscription extends APIResource {
  create(
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return this._client.put('/subscription', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<SubscriptionListResponse> {
    return this._client.get('/subscription', options);
  }
}

export interface SubscriptionCreateResponse {
  result: boolean;
}

export interface SubscriptionListResponse {
  result: Array<Shared.Subscription>;
}

export interface SubscriptionCreateParams {
  cardID: string;

  frequency: 'fixed' | 'daily' | 'weekly' | 'monthly' | 'yearly';

  productVariantID: string;

  quantity: number;

  shippingID: string;
}

export declare namespace Subscription {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };
}
