// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Emails extends APIResource {
  /**
   * Subscribe to email updates from Terminal.
   */
  create(body: EmailCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmailCreateResponse> {
    return this._client.post('/emails', { body, ...options });
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

export declare namespace Emails {
  export { type EmailCreateResponse as EmailCreateResponse, type EmailCreateParams as EmailCreateParams };
}
