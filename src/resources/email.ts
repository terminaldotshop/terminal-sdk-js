// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Email extends APIResource {
  /**
   * Subscribe to email updates from Terminal.
   *
   * @example
   * ```ts
   * const email = await client.email.create({
   *   email: 'john@example.com',
   * });
   * ```
   */
  create(body: EmailCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmailCreateResponse> {
    return this._client.post('/email', { body, ...options });
  }
}

export interface EmailCreateResponse {
  data: 'ok';
}

export interface EmailCreateParams {
  /**
   * Email address to subscribe to Terminal updates with.
   */
  email: string;
}

export declare namespace Email {
  export { type EmailCreateResponse as EmailCreateResponse, type EmailCreateParams as EmailCreateParams };
}
