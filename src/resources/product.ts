// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Product extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse> {
    return this._client.get('/product', options);
  }
}

export interface ProductListResponse {
  result: Array<Shared.Product>;
}

export declare namespace Product {
  export { type ProductListResponse as ProductListResponse };
}
