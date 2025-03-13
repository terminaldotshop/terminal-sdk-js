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
  AddressGetResponse,
  AddressListResponse,
  AddressResource,
} from './resources/address';
import {
  App,
  AppCreateParams,
  AppCreateResponse,
  AppDeleteResponse,
  AppGetResponse,
  AppListResponse,
  AppResource,
} from './resources/app';
import {
  Card,
  CardCollectResponse,
  CardCreateParams,
  CardCreateResponse,
  CardDeleteResponse,
  CardGetResponse,
  CardListResponse,
  CardResource,
} from './resources/card';
import {
  Cart,
  CartClearResponse,
  CartConvertResponse,
  CartGetResponse,
  CartResource,
  CartSetAddressParams,
  CartSetAddressResponse,
  CartSetCardParams,
  CartSetCardResponse,
  CartSetItemParams,
  CartSetItemResponse,
} from './resources/cart';
import { Email, EmailCreateParams, EmailCreateResponse } from './resources/email';
import {
  Order,
  OrderCreateParams,
  OrderCreateResponse,
  OrderGetResponse,
  OrderListResponse,
  OrderResource,
} from './resources/order';
import {
  Product,
  ProductGetResponse,
  ProductListResponse,
  ProductResource,
  ProductVariant,
} from './resources/product';
import {
  Profile,
  ProfileMeResponse,
  ProfileResource,
  ProfileUpdateParams,
  ProfileUpdateResponse,
} from './resources/profile';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteResponse,
  SubscriptionGetResponse,
  SubscriptionListResponse,
  SubscriptionResource,
} from './resources/subscription';
import {
  Token,
  TokenCreateResponse,
  TokenDeleteResponse,
  TokenGetResponse,
  TokenListResponse,
  TokenResource,
} from './resources/token';
import { View, ViewInitResponse } from './resources/view';

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

  appId?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.terminal.shop/`
   * - `dev` corresponds to `https://api.dev.terminal.shop/`
   */
  environment?: Environment | undefined;

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
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

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
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Terminal API.
 */
export class Terminal extends Core.APIClient {
  bearerToken: string;
  appId: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Terminal API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['TERMINAL_BEARER_TOKEN'] ?? undefined]
   * @param {string | null | undefined} [opts.appId]
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
    appId = null,
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.TerminalError(
        "The TERMINAL_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Terminal client with an bearerToken option, like new Terminal({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      appId,
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
    this.appId = appId;
  }

  product: API.ProductResource = new API.ProductResource(this);
  profile: API.ProfileResource = new API.ProfileResource(this);
  address: API.AddressResource = new API.AddressResource(this);
  card: API.CardResource = new API.CardResource(this);
  cart: API.CartResource = new API.CartResource(this);
  order: API.OrderResource = new API.OrderResource(this);
  subscription: API.SubscriptionResource = new API.SubscriptionResource(this);
  token: API.TokenResource = new API.TokenResource(this);
  app: API.AppResource = new API.AppResource(this);
  email: API.Email = new API.Email(this);
  view: API.View = new API.View(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      'x-terminal-app-id': this.appId,
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

Terminal.ProductResource = ProductResource;
Terminal.ProfileResource = ProfileResource;
Terminal.AddressResource = AddressResource;
Terminal.CardResource = CardResource;
Terminal.CartResource = CartResource;
Terminal.OrderResource = OrderResource;
Terminal.SubscriptionResource = SubscriptionResource;
Terminal.TokenResource = TokenResource;
Terminal.AppResource = AppResource;
Terminal.Email = Email;
Terminal.View = View;
export declare namespace Terminal {
  export type RequestOptions = Core.RequestOptions;

  export {
    ProductResource as ProductResource,
    type Product as Product,
    type ProductVariant as ProductVariant,
    type ProductListResponse as ProductListResponse,
    type ProductGetResponse as ProductGetResponse,
  };

  export {
    ProfileResource as ProfileResource,
    type Profile as Profile,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileMeResponse as ProfileMeResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    AddressResource as AddressResource,
    type Address as Address,
    type AddressCreateResponse as AddressCreateResponse,
    type AddressListResponse as AddressListResponse,
    type AddressDeleteResponse as AddressDeleteResponse,
    type AddressGetResponse as AddressGetResponse,
    type AddressCreateParams as AddressCreateParams,
  };

  export {
    CardResource as CardResource,
    type Card as Card,
    type CardCreateResponse as CardCreateResponse,
    type CardListResponse as CardListResponse,
    type CardDeleteResponse as CardDeleteResponse,
    type CardCollectResponse as CardCollectResponse,
    type CardGetResponse as CardGetResponse,
    type CardCreateParams as CardCreateParams,
  };

  export {
    CartResource as CartResource,
    type Cart as Cart,
    type CartClearResponse as CartClearResponse,
    type CartConvertResponse as CartConvertResponse,
    type CartGetResponse as CartGetResponse,
    type CartSetAddressResponse as CartSetAddressResponse,
    type CartSetCardResponse as CartSetCardResponse,
    type CartSetItemResponse as CartSetItemResponse,
    type CartSetAddressParams as CartSetAddressParams,
    type CartSetCardParams as CartSetCardParams,
    type CartSetItemParams as CartSetItemParams,
  };

  export {
    OrderResource as OrderResource,
    type Order as Order,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderListResponse as OrderListResponse,
    type OrderGetResponse as OrderGetResponse,
    type OrderCreateParams as OrderCreateParams,
  };

  export {
    SubscriptionResource as SubscriptionResource,
    type Subscription as Subscription,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
  };

  export {
    TokenResource as TokenResource,
    type Token as Token,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenGetResponse as TokenGetResponse,
  };

  export {
    AppResource as AppResource,
    type App as App,
    type AppCreateResponse as AppCreateResponse,
    type AppListResponse as AppListResponse,
    type AppDeleteResponse as AppDeleteResponse,
    type AppGetResponse as AppGetResponse,
    type AppCreateParams as AppCreateParams,
  };

  export {
    Email as Email,
    type EmailCreateResponse as EmailCreateResponse,
    type EmailCreateParams as EmailCreateParams,
  };

  export { View as View, type ViewInitResponse as ViewInitResponse };
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
