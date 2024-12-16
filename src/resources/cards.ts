// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Cards extends APIResource {
  /**
   * Attach a credit card (tokenized via Stripe) to the current user.
   */
  create(body: CardCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardCreateResponse> {
    return this._client.post('/cards', { body, ...options });
  }

  /**
   * List the credit cards associated with the current user.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/cards', options);
  }

  /**
   * Delete a credit card associated with the current user.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CardDeleteResponse> {
    return this._client.delete(`/cards/${id}`, options);
  }
}

/**
 * Credit card used for payments in the Terminal shop.
 */
export interface Card {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Brand of the card.
   */
  brand: string;

  /**
   * Expiration of the card.
   */
  expiration: Card.Expiration;

  /**
   * Last four digits of the card.
   */
  last4: string;
}

export namespace Card {
  /**
   * Expiration of the card.
   */
  export interface Expiration {
    /**
     * Expiration month of the card.
     */
    month: number;

    /**
     * Expiration year of the card.
     */
    year: number;
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
  data: Array<Card>;
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

export declare namespace Cards {
  export {
    type Card as Card,
    type CardCreateResponse as CardCreateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardCreateParams as CardCreateParams,
  };
}
