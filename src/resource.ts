// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Terminal } from './index';

export abstract class APIResource {
  protected _client: Terminal;

  constructor(client: Terminal) {
    this._client = client;
  }
}
