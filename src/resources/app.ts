// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AppResource extends APIResource {
  /**
   * Create an app.
   */
  create(body: AppCreateParams, options?: Core.RequestOptions): Core.APIPromise<AppCreateResponse> {
    return this._client.post('/app', { body, ...options });
  }

  /**
   * List the current user's registered apps.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AppListResponse> {
    return this._client.get('/app', options);
  }

  /**
   * Delete the app with the given ID.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<AppDeleteResponse> {
    return this._client.delete(`/app/${id}`, options);
  }

  /**
   * Get the app with the given ID.
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
