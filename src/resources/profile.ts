// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class ProfileResource extends APIResource {
  /**
   * Update the current user's profile.
   */
  update(body?: ProfileUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(
    body: ProfileUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.put('/profile', { body, ...options });
  }

  /**
   * Get the current user's profile.
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
  /**
   * Email address of the user.
   */
  email?: string | null;

  /**
   * Name of the user.
   */
  name?: string | null;
}

export declare namespace ProfileResource {
  export {
    type Profile as Profile,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileMeResponse as ProfileMeResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };
}
