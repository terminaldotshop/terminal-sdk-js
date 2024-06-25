// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@terminal/sdk/resource';
import * as Core from '@terminal/sdk/core';
import * as ProductAPI from '@terminal/sdk/resources/product';
import * as Shared from '@terminal/sdk/resources/shared';

export class Product extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse> {
    return this._client.get('/product', options);
  }
}

export interface ProductListResponse {
  result: Array<Shared.Product>;
}

export namespace Product {
  export import ProductListResponse = ProductAPI.ProductListResponse;
}
