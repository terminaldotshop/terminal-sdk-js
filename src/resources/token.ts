// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class TokenResource extends APIResource {
  /**
   * Create a personal access token.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<TokenCreateResponse> {
    return this._client.post('/token', options);
  }

  /**
   * List the current user's personal access tokens.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<TokenListResponse> {
    return this._client.get('/token', options);
  }

  /**
   * Delete the personal access token with the given ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<TokenDeleteResponse> {
    return this._client.delete(`/token/${id}`, options);
  }

  /**
   * Get the personal access token with the given ID.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<TokenGetResponse> {
    return this._client.get(`/token/${id}`, options);
  }
}

/**
 * A personal access token used to access the Terminal API. If you leak this,
 * expect large sums of coffee to be ordered on your credit card.
 */
export interface Token {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Personal access token (obfuscated).
   */
  token: string;

  /**
   * Relevant timestamps for the token.
   */
  time: Token.Time;
}

export namespace Token {
  /**
   * Relevant timestamps for the token.
   */
  export interface Time {
    /**
     * The created time for the token.
     */
    created: string;
  }
}

export interface TokenCreateResponse {
  data: TokenCreateResponse.Data;
}

export namespace TokenCreateResponse {
  export interface Data {
    /**
     * Personal token ID.
     */
    id: string;

    /**
     * Personal access token. Include this in the Authorization header
     * (`Bearer <token>`) when accessing the Terminal API.
     */
    token: string;
  }
}

export interface TokenListResponse {
  /**
   * List of personal access tokens.
   */
  data: Array<Token>;
}

export interface TokenDeleteResponse {
  data: 'ok';
}

export interface TokenGetResponse {
  /**
   * A personal access token used to access the Terminal API. If you leak this,
   * expect large sums of coffee to be ordered on your credit card.
   */
  data: Token;
}

export declare namespace TokenResource {
  export {
    type Token as Token,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenGetResponse as TokenGetResponse,
  };
}
