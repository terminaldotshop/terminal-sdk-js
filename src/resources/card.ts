// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as CardAPI from '@terminal/sdk/resources/card';
import * as Shared from '@terminal/sdk/resources/shared';

export class Card extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<CardListResponse> {
    return this._client.get('/card', options);
  }
}

export interface CardListResponse {
  result: Array<Shared.Card>;
}

export namespace Card {
  export import CardListResponse = CardAPI.CardListResponse;
}
