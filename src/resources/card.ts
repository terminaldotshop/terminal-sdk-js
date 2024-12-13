// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Card extends APIResource {
  /**
   * Attach a credit card (tokenized via Stripe) to the current user.
   */
  create(body: CardCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardCreateResponse> {
    return this._client.post('/card', { body, ...options });
  }

  /**
   * List the credit cards associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }

  /**
   * Delete a credit card associated with the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CardDeleteResponse> {
    return this._client.delete(`/card/${id}`, options);
  }
}

export interface CardCreateResponse {
  /**
   * ID of the card.
   */
  data: string;
}

export interface CardListResponse {
  /**
   * List of cards associated with the user.
   */
  data: Array<Shared.Card>;
}

export interface CardDeleteResponse {
  data: 'ok';
}

export interface CardCreateParams {
  /**
   * Stripe card token. Learn how to
   * [create one here](https://docs.stripe.com/api/tokens/create_card).
   */
  token: string;
}

export declare namespace Card {
  export {
    type CardCreateResponse as CardCreateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardCreateParams as CardCreateParams,
  };
}
