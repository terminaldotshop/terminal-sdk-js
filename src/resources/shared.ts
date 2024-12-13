// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Physical address associated with a Terminal shop user.
 */
export interface Address {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * City of the address.
   */
  city: string;

  /**
   * ISO 3166-1 alpha-2 country code of the address.
   */
  country: string;

  /**
   * The recipient's name.
   */
  name: string;

  /**
   * Street of the address.
   */
  street1: string;

  /**
   * Zip code of the address.
   */
  zip: string;

  /**
   * Phone number of the recipient.
   */
  phone?: string;

  /**
   * Province or state of the address.
   */
  province?: string;

  /**
   * Apartment, suite, etc. of the address.
   */
  street2?: string;
}

/**
 * Credit card used for payments in the Terminal shop.
 */
export interface Card {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Brand of the card.
   */
  brand: string;

  /**
   * Expiration of the card.
   */
  expiration: Card.Expiration;

  /**
   * Last four digits of the card.
   */
  last4: string;
}

export namespace Card {
  /**
   * Expiration of the card.
   */
  export interface Expiration {
    /**
     * Expiration month of the card.
     */
    month: number;

    /**
     * Expiration year of the card.
     */
    year: number;
  }
}

/**
 * The current Terminal shop user's cart.
 */
export interface Cart {
  /**
   * The subtotal and shipping amounts for the current user's cart.
   */
  amount: Cart.Amount;

  /**
   * An array of items in the current user's cart.
   */
  items: Array<Cart.Item>;

  /**
   * The subtotal of all items in the current user's cart.
   */
  subtotal: number;

  /**
   * ID of the shipping address selected on the current user's cart.
   */
  addressID?: string;

  /**
   * ID of the card selected on the current user's cart.
   */
  cardID?: string;

  /**
   * Shipping information for the current user's cart.
   */
  shipping?: Cart.Shipping;
}

export namespace Cart {
  /**
   * The subtotal and shipping amounts for the current user's cart.
   */
  export interface Amount {
    /**
     * Subtotal of the current user's cart, in cents (USD).
     */
    subtotal: number;

    /**
     * Shipping amount of the current user's cart, in cents (USD).
     */
    shipping?: number;
  }

  /**
   * An item in the current Terminal shop user's cart.
   */
  export interface Item {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * ID of the product variant for this item in the current user's cart.
     */
    productVariantID: string;

    /**
     * Quantity of the item in the current user's cart.
     */
    quantity: number;

    /**
     * Subtotal of the item in the current user's cart, in cents (USD).
     */
    subtotal: number;
  }

  /**
   * Shipping information for the current user's cart.
   */
  export interface Shipping {
    /**
     * Shipping service name.
     */
    service?: string;

    /**
     * Shipping timeframe provided by the shipping carrier.
     */
    timeframe?: string;
  }
}

/**
 * An order from the Terminal shop.
 */
export interface Order {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * The subtotal and shipping amounts of the order.
   */
  amount: Order.Amount;

  /**
   * Items in the order.
   */
  items: Array<Order.Item>;

  /**
   * Shipping address of the order.
   */
  shipping: Order.Shipping;

  /**
   * Tracking information of the order.
   */
  tracking: Order.Tracking;

  /**
   * Zero-based index of the order for this user only.
   */
  index?: number;
}

export namespace Order {
  /**
   * The subtotal and shipping amounts of the order.
   */
  export interface Amount {
    /**
     * Shipping amount of the order, in cents (USD).
     */
    shipping: number;

    /**
     * Subtotal amount of the order, in cents (USD).
     */
    subtotal: number;
  }

  export interface Item {
    /**
     * Unique object identifier. The format and length of IDs may change over time.
     */
    id: string;

    /**
     * Amount of the item in the order, in cents (USD).
     */
    amount: number;

    /**
     * Quantity of the item in the order.
     */
    quantity: number;

    /**
     * Description of the item in the order.
     */
    description?: string;

    /**
     * ID of the product variant of the item in the order.
     */
    productVariantID?: string;
  }

  /**
   * Shipping address of the order.
   */
  export interface Shipping {
    /**
     * City of the address.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code of the address.
     */
    country: string;

    /**
     * The recipient's name.
     */
    name: string;

    /**
     * Street of the address.
     */
    street1: string;

    /**
     * Zip code of the address.
     */
    zip: string;

    /**
     * Phone number of the recipient.
     */
    phone?: string;

    /**
     * Province or state of the address.
     */
    province?: string;

    /**
     * Apartment, suite, etc. of the address.
     */
    street2?: string;
  }

  /**
   * Tracking information of the order.
   */
  export interface Tracking {
    /**
     * Tracking number of the order.
     */
    number?: string;

    /**
     * Shipping service of the order.
     */
    service?: string;

    /**
     * Tracking URL of the order.
     */
    url?: string;
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

/**
 * Subscription to a Terminal shop product.
 */
export interface Subscription {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * ID of the shipping address used for the subscription.
   */
  addressID: string;

  /**
   * ID of the card used for the subscription.
   */
  cardID: string;

  /**
   * Frequency of the subscription.
   */
  frequency: 'fixed' | 'daily' | 'weekly' | 'monthly' | 'yearly';

  /**
   * ID of the product variant being subscribed to.
   */
  productVariantID: string;

  /**
   * Quantity of the subscription.
   */
  quantity: number;
}

/**
 * A Terminal shop user. (We have users, btw.)
 */
export interface User {
  /**
   * Unique object identifier. The format and length of IDs may change over time.
   */
  id: string;

  /**
   * Email address of the user.
   */
  email: string | null;

  /**
   * The user's fingerprint, derived from their public SSH key.
   */
  fingerprint: string | null;

  /**
   * Name of the user.
   */
  name: string | null;

  /**
   * Stripe customer ID of the user.
   */
  stripeCustomerID: string;
}
