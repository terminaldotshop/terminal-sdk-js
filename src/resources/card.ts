// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as CardAPI from '@terminal/sdk/resources/card';

export class CardResource extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }
}

export interface Card {
  id: string;

  brand: string;

  expiration: Card.Expiration;

  last4: string;
}

export namespace Card {
  export interface Expiration {
    month: number;

    year: number;
  }
}

export interface CardListResponse {
  result: Array<Card>;
}

export namespace CardResource {
  export import Card = CardAPI.Card;
  export import CardListResponse = CardAPI.CardListResponse;
}
