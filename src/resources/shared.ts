// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Address {
  city: string;

  country: string;

  name: string;

  province: string;

  street1: string;

  zip: string;

  street2?: string;
}

export interface Card {
  id: string;

  brand: string;

  expiration: Card.Expiration;

  last4: string;
}

export namespace Card {
  export interface Expiration {
    month: number;

    year: number;
  }
}

export interface Cart {
  amount: Cart.Amount;

  items: Array<Cart.Item>;

  subtotal: number;

  cardID?: string;

  shippingID?: string;
}

export namespace Cart {
  export interface Amount {
    shipping: number;

    subtotal: number;
  }

  export interface Item {
    id: string;

    productVariantID: string;

    quantity: number;

    subtotal: number;
  }
}

export interface Product {
  id: string;

  description: string;

  name: string;

  variants: Array<ProductVariant>;
}

export interface ProductVariant {
  id: string;

  name: string;

  price: number;
}

export interface Shipping {
  id: string;

  address: Address;
}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;

  stripeCustomerID: string;
}
