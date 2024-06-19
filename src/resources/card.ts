// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as CardAPI from '@terminal/sdk/resources/card';

export class Card extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }
}

export interface CardListResponse {
  result: Array<CardListResponse.Result>;
}

export namespace CardListResponse {
  export interface Result {
    id: string;

    brand: string;

    expiration: Result.Expiration;

    last4: string;
  }

  export namespace Result {
    export interface Expiration {
      month: number;

      year: number;
    }
  }
}

export namespace Card {
  export import CardListResponse = CardAPI.CardListResponse;
}
