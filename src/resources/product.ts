// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ProductResource extends APIResource {
  /**
   * List all products for sale in the Terminal shop.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProductListResponse> {
    return this._client.get('/product', options);
  }

  /**
   * Get a product by ID from the Terminal shop.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<ProductGetResponse> {
    return this._client.get(`/product/${id}`, options);
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
  tags?: Product.Tags;
}

export namespace Product {
  /**
   * Tags for the product.
   */
  export interface Tags {
    app?: string;

    color?: string;

    featured?: boolean;

    market_eu?: boolean;

    market_global?: boolean;

    market_na?: boolean;
  }
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

  /**
   * Description of the product variant.
   */
  description?: string;

  /**
   * Tags for the product variant.
   */
  tags?: ProductVariant.Tags;
}

export namespace ProductVariant {
  /**
   * Tags for the product variant.
   */
  export interface Tags {
    app?: string;

    market_eu?: boolean;

    market_global?: boolean;

    market_na?: boolean;
  }
}

export interface ProductListResponse {
  /**
   * A list of products.
   */
  data: Array<Product>;
}

export interface ProductGetResponse {
  /**
   * Product sold in the Terminal shop.
   */
  data: Product;
}

export declare namespace ProductResource {
  export {
    type Product as Product,
    type ProductVariant as ProductVariant,
    type ProductListResponse as ProductListResponse,
    type ProductGetResponse as ProductGetResponse,
  };
}
