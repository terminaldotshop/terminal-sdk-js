// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class CardResource extends APIResource {
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

  /**
   * Create a temporary URL for collecting credit card information for the current
   * user.
   */
  collect(options?: Core.RequestOptions): Core.APIPromise<CardCollectResponse> {
    return this._client.post('/card/collect', options);
  }

  /**
   * Get a credit card by ID associated with the current user.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<CardGetResponse> {
    return this._client.get(`/card/${id}`, options);
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
   * Date the card was created.
   */
  created: string;

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

export interface CardCollectResponse {
  /**
   * URL for collecting card information.
   */
  data: CardCollectResponse.Data;
}

export namespace CardCollectResponse {
  /**
   * URL for collecting card information.
   */
  export interface Data {
    /**
     * Temporary URL that allows a user to enter credit card details over https at
     * terminal.shop.
     */
    url: string;
  }
}

export interface CardGetResponse {
  /**
   * Credit card used for payments in the Terminal shop.
   */
  data: Card;
}

export interface CardCreateParams {
  /**
   * Stripe card token. Learn how to
   * [create one here](https://docs.stripe.com/api/tokens/create_card).
   */
  token: string;
}

export declare namespace CardResource {
  export {
    type Card as Card,
    type CardCreateResponse as CardCreateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardCollectResponse as CardCollectResponse,
    type CardGetResponse as CardGetResponse,
    type CardCreateParams as CardCreateParams,
  };
}
