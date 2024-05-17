// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@terminal/sdk/core';
import { APIResource } from '@terminal/sdk/resource';
import * as ProductAPI from '@terminal/sdk/resources/product';

export class Product extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse> {
    return this._client.get('/product', options);
  }
}

export interface ProductListResponse {
  result: Array<ProductListResponse.Result>;
}

export namespace ProductListResponse {
  export interface Result {
    id: string;

    description: string;

    name: string;

    variants: Array<Result.Variant>;
  }

  export namespace Result {
    export interface Variant {
      id: string;

      name: string;

      price: number;
    }
  }
}

export namespace Product {
  export import ProductListResponse = ProductAPI.ProductListResponse;
}
