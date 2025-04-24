// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as ViewAPI from './view';
import * as AddressAPI from './address';
import * as AppAPI from './app';
import * as CardAPI from './card';
import * as CartAPI from './cart';
import * as OrderAPI from './order';
import * as ProductAPI from './product';
import * as ProfileAPI from './profile';
import * as SubscriptionAPI from './subscription';
import * as TokenAPI from './token';

export class View extends APIResource {
  /**
   * Get initial app data, including user, products, cart, addresses, cards,
   * subscriptions, and orders.
   */
  init(options?: Core.RequestOptions): Core.APIPromise<ViewInitResponse> {
    return this._client.get('/view/init', options);
  }
}

/**
 * A Terminal shop user's region.
 */
export type Region = 'eu' | 'na' | 'global';

export interface ViewInitResponse {
  /**
   * Initial app data.
   */
  data: ViewInitResponse.Data;
}

export namespace ViewInitResponse {
  /**
   * Initial app data.
   */
  export interface Data {
    addresses: Array<AddressAPI.Address>;

    apps: Array<AppAPI.App>;

    cards: Array<CardAPI.Card>;

    /**
     * The current Terminal shop user's cart.
     */
    cart: CartAPI.Cart;

    orders: Array<OrderAPI.Order>;

    products: Array<ProductAPI.Product>;

    /**
     * A Terminal shop user's profile. (We have users, btw.)
     */
    profile: ProfileAPI.Profile;

    /**
     * A Terminal shop user's region.
     */
    region: ViewAPI.Region;

    subscriptions: Array<SubscriptionAPI.Subscription>;

    tokens: Array<TokenAPI.Token>;
  }
}

export declare namespace View {
  export { type Region as Region, type ViewInitResponse as ViewInitResponse };
}
