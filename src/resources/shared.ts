// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Address {
  city: string;

  country: string;

  name: string;

  street1: string;

  zip: string;

  phone?: string;

  province?: string;

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

  shipping?: Cart.Shipping;

  shippingID?: string;
}

export namespace Cart {
  export interface Amount {
    subtotal: number;

    shipping?: number;
  }

  export interface Item {
    id: string;

    productVariantID: string;

    quantity: number;

    subtotal: number;
  }

  export interface Shipping {
    service?: string;

    timeframe?: string;
  }
}

export interface Order {
  id: string;

  amount: Order.Amount;

  items: Array<Order.Item>;

  shipping: Order.Shipping;

  tracking: Order.Tracking;

  index?: number;
}

export namespace Order {
  export interface Amount {
    shipping: number;

    subtotal: number;
  }

  export interface Item {
    id: string;

    amount: number;

    quantity: number;

    description?: string;

    productVariantID?: string;
  }

  export interface Shipping {
    city: string;

    country: string;

    name: string;

    street1: string;

    zip: string;

    phone?: string;

    province?: string;

    street2?: string;
  }

  export interface Tracking {
    number?: string;

    service?: string;

    url?: string;
  }
}

export interface Product {
  id: string;

  description: string;

  name: string;

  variants: Array<ProductVariant>;

  order?: number;

  subscription?: 'allowed' | 'required';

  tags?: Record<string, string>;
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

export interface Subscription {
  id: string;

  cardID: string;

  frequency: 'fixed' | 'daily' | 'weekly' | 'monthly' | 'yearly';

  productVariantID: string;

  quantity: number;

  shippingID: string;
}

export interface User {
  id: string;

  email: string | null;

  fingerprint: string | null;

  name: string | null;

  stripeCustomerID: string;
}
