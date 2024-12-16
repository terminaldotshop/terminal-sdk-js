// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Products extends APIResource {
  /**
   * List all products for sale in the Terminal shop.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse> {
    return this._client.get('/products', options);
  }
}

/**
 * Product sold in the Terminal shop.
 */
export interface Product {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Description of the product.
   */
  description: string;

  /**
   * Name of the product.
   */
  name: string;

  /**
   * List of variants of the product.
   */
  variants: Array<ProductVariant>;

  /**
   * Order of the product used when displaying a sorted list of products.
   */
  order?: number;

  /**
   * Whether the product must be or can be subscribed to.
   */
  subscription?: 'allowed' | 'required';

  /**
   * Tags for the product.
   */
  tags?: Record<string, string>;
}

/**
 * Variant of a product in the Terminal shop.
 */
export interface ProductVariant {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Name of the product variant.
   */
  name: string;

  /**
   * Price of the product variant in cents (USD).
   */
  price: number;
}

export interface ProductListResponse {
  /**
   * A list of products.
   */
  data: Array<Product>;
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductVariant as ProductVariant,
    type ProductListResponse as ProductListResponse,
  };
}
