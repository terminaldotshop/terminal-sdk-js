// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Card extends APIResource {
  create(body: CardCreateParams, options?: Core.RequestOptions): Core.APIPromise<CardCreateResponse> {
    return this._client.post('/card', { body, ...options });
  }

  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }

  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<CardDeleteResponse> {
    return this._client.delete(`/card/${id}`, options);
  }
}

export interface CardCreateResponse {
  result: string;
}

export interface CardListResponse {
  result: Array<Shared.Card>;
}

export interface CardDeleteResponse {
  result: 'ok';
}

export interface CardCreateParams {
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
