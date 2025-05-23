// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AppResource extends APIResource {
  /**
   * Create an app.
   *
   * @example
   * ```ts
   * const app = await client.app.create({
   *   name: 'Example App',
   *   redirectURI: 'https://example.com/callback',
   * });
   * ```
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse> {
    return this._client.post('/app', { body, ...options });
  }

  /**
   * List the current user's registered apps.
   *
   * @example
   * ```ts
   * const apps = await client.app.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AppListResponse> {
    return this._client.get('/app', options);
  }

  /**
   * Delete the app with the given ID.
   *
   * @example
   * ```ts
   * const app = await client.app.delete(
   *   'cli_XXXXXXXXXXXXXXXXXXXXXXXXX',
   * );
   * ```
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse> {
    return this._client.delete(`/app/${id}`, options);
  }

  /**
   * Get the app with the given ID.
   *
   * @example
   * ```ts
   * const app = await client.app.get(
   *   'cli_XXXXXXXXXXXXXXXXXXXXXXXXX',
   * );
   * ```
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<AppGetResponse> {
    return this._client.get(`/app/${id}`, options);
  }
}

/**
 * A Terminal App used for configuring an OAuth 2.0 client.
 */
export interface App {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Name of the app.
   */
  name: string;

  /**
   * Redirect URI of the app.
   */
  redirectURI: string;

  /**
   * OAuth 2.0 client secret of the app (obfuscated).
   */
  secret: string;
}

export interface AppCreateResponse {
  data: AppCreateResponse.Data;
}

export namespace AppCreateResponse {
  export interface Data {
    /**
     * OAuth 2.0 client ID.
     */
    id: string;

    /**
     * OAuth 2.0 client secret.
     */
    secret: string;
  }
}

export interface AppListResponse {
  /**
   * List of apps.
   */
  data: Array<App>;
}

export interface AppDeleteResponse {
  data: 'ok';
}

export interface AppGetResponse {
  /**
   * A Terminal App used for configuring an OAuth 2.0 client.
   */
  data: App;
}

export interface AppCreateParams {
  name: string;

  redirectURI: string;
}

export declare namespace AppResource {
  export {
    type App as App,
    type AppCreateResponse as AppCreateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppCreateParams as AppCreateParams,
  };
}
