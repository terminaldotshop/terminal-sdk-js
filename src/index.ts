// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Address,
  AddressCreateParams,
  AddressCreateResponse,
  AddressDeleteResponse,
  AddressListResponse,
} from './resources/address';
import {
  Card,
  CardCreateParams,
  CardCreateResponse,
  CardDeleteResponse,
  CardListResponse,
} from './resources/card';
import {
  Cart,
  CartListResponse,
  CartSetAddressParams,
  CartSetAddressResponse,
  CartSetCardParams,
  CartSetCardResponse,
  CartSetItemParams,
  CartSetItemResponse,
} from './resources/cart';
import { Order, OrderCreateResponse, OrderGetResponse, OrderListResponse } from './resources/order';
import { Product, ProductListResponse } from './resources/product';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteResponse,
  SubscriptionListResponse,
} from './resources/subscription';
import {
  User,
  UserInitResponse,
  UserMeResponse,
  UserUpdateParams,
  UserUpdateResponse,
} from './resources/user';

const environments = {
  production: 'https://api.terminal.shop/',
  dev: 'https://api.dev.terminal.shop/',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Defaults to process.env['TERMINAL_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.terminal.shop/`
   * - `dev` corresponds to `https://api.dev.terminal.shop/`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['TERMINAL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Terminal API.
 */
export class Terminal extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Terminal API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['TERMINAL_BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['TERMINAL_BASE_URL'] ?? https://api.terminal.shop/] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('TERMINAL_BASE_URL'),
    bearerToken = Core.readEnv('TERMINAL_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.TerminalError(
        "The TERMINAL_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Terminal client with an bearerToken option, like new Terminal({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.TerminalError(
        'Ambiguous URL; The `baseURL` option (or TERMINAL_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  product: API.Product = new API.Product(this);
  user: API.User = new API.User(this);
  address: API.Address = new API.Address(this);
  card: API.Card = new API.Card(this);
  cart: API.Cart = new API.Cart(this);
  order: API.Order = new API.Order(this);
  subscription: API.Subscription = new API.Subscription(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Terminal = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static TerminalError = Errors.TerminalError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Terminal.Product = Product;
Terminal.User = User;
Terminal.Address = Address;
Terminal.Card = Card;
Terminal.Cart = Cart;
Terminal.Order = Order;
Terminal.Subscription = Subscription;
export declare namespace Terminal {
  export type RequestOptions = Core.RequestOptions;

  export { Product as Product, type ProductListResponse as ProductListResponse };

  export {
    User as User,
    type UserUpdateResponse as UserUpdateResponse,
    type UserInitResponse as UserInitResponse,
    type UserMeResponse as UserMeResponse,
    type UserUpdateParams as UserUpdateParams,
  };

  export {
    Address as Address,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressCreateParams as AddressCreateParams,
  };

  export {
    Card as Card,
    type CardCreateResponse as CardCreateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardCreateParams as CardCreateParams,
  };

  export {
    Cart as Cart,
    type CartListResponse as CartListResponse,
    type CartSetAddressResponse as CartSetAddressResponse,
    type CartSetCardResponse as CartSetCardResponse,
    type CartSetItemResponse as CartSetItemResponse,
    type CartSetAddressParams as CartSetAddressParams,
    type CartSetCardParams as CartSetCardParams,
    type CartSetItemParams as CartSetItemParams,
  };

  export {
    Order as Order,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderGetResponse as OrderGetResponse,
  };

  export {
    Subscription as Subscription,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };

  export type Address = API.Address;
  export type Card = API.Card;
  export type Cart = API.Cart;
  export type Order = API.Order;
  export type Product = API.Product;
  export type ProductVariant = API.ProductVariant;
  export type Subscription = API.Subscription;
  export type User = API.User;
}

export { toFile, fileFromPath } from './uploads';
export {
  TerminalError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Terminal;
