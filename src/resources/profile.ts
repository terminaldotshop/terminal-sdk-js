// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ProfileResource extends APIResource {
  /**
   * Update the current user's profile.
   *
   * @example
   * ```ts
   * const profile = await client.profile.update({
   *   email: 'john@example.com',
   *   name: 'John Doe',
   * });
   * ```
   */
  update(body: ProfileUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse> {
    return this._client.put('/profile', { body, ...options });
  }

  /**
   * Get the current user's profile.
   *
   * @example
   * ```ts
   * const response = await client.profile.me();
   * ```
   */
  me(options?: Core.RequestOptions): Core.APIPromise<ProfileMeResponse> {
    return this._client.get('/profile', options);
  }
}

/**
 * A Terminal shop user's profile. (We have users, btw.)
 */
export interface Profile {
  /**
   * A Terminal shop user. (We have users, btw.)
   */
  user: Profile.User;
}

export namespace Profile {
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
}

export interface ProfileUpdateResponse {
  /**
   * A Terminal shop user's profile. (We have users, btw.)
   */
  data: Profile;
}

export interface ProfileMeResponse {
  /**
   * A Terminal shop user's profile. (We have users, btw.)
   */
  data: Profile;
}

export interface ProfileUpdateParams {
  email: string;

  name: string;
}

export declare namespace ProfileResource {
  export {
    type Profile as Profile,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileMeResponse as ProfileMeResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
