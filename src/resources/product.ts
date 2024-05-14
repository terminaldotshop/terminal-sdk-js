// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ProductAPI from './product';

export class Product extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProductRetrieveResponse> {
    return this._client.get('/product', options);
  }
}

export interface ProductRetrieveResponse {
  result: Array<ProductRetrieveResponse.Result>;
}

export namespace ProductRetrieveResponse {
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

      price: string;
    }
  }
}

export namespace Product {
  export import ProductRetrieveResponse = ProductAPI.ProductRetrieveResponse;
}
