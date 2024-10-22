// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as CardAPI from './card';
import * as Shared from './shared';

export class Card extends APIResource {
  create(body: CardCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardCreateResponse> {
    return this._client.post('/card', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }
}

export interface CardCreateResponse {
  result: string;
}

export interface CardListResponse {
  result: Array<Shared.Card>;
}

export interface CardCreateParams {
  token: string;
}

export namespace Card {
  export import CardCreateResponse = CardAPI.CardCreateResponse;
  export import CardListResponse = CardAPI.CardListResponse;
  export import CardCreateParams = CardAPI.CardCreateParams;
}
