// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.product.list',
    fullyQualifiedName: 'product.list',
    httpMethod: 'get',
    httpPath: '/product',
  },
  {
    clientCallName: 'client.product.get',
    fullyQualifiedName: 'product.get',
    httpMethod: 'get',
    httpPath: '/product/{id}',
  },
  {
    clientCallName: 'client.profile.update',
    fullyQualifiedName: 'profile.update',
    httpMethod: 'put',
    httpPath: '/profile',
  },
  {
    clientCallName: 'client.profile.me',
    fullyQualifiedName: 'profile.me',
    httpMethod: 'get',
    httpPath: '/profile',
  },
  {
    clientCallName: 'client.address.create',
    fullyQualifiedName: 'address.create',
    httpMethod: 'post',
    httpPath: '/address',
  },
  {
    clientCallName: 'client.address.list',
    fullyQualifiedName: 'address.list',
    httpMethod: 'get',
    httpPath: '/address',
  },
  {
    clientCallName: 'client.address.delete',
    fullyQualifiedName: 'address.delete',
    httpMethod: 'delete',
    httpPath: '/address/{id}',
  },
  {
    clientCallName: 'client.address.get',
    fullyQualifiedName: 'address.get',
    httpMethod: 'get',
    httpPath: '/address/{id}',
  },
  {
    clientCallName: 'client.card.create',
    fullyQualifiedName: 'card.create',
    httpMethod: 'post',
    httpPath: '/card',
  },
  {
    clientCallName: 'client.card.list',
    fullyQualifiedName: 'card.list',
    httpMethod: 'get',
    httpPath: '/card',
  },
  {
    clientCallName: 'client.card.delete',
    fullyQualifiedName: 'card.delete',
    httpMethod: 'delete',
    httpPath: '/card/{id}',
  },
  {
    clientCallName: 'client.card.collect',
    fullyQualifiedName: 'card.collect',
    httpMethod: 'post',
    httpPath: '/card/collect',
  },
  {
    clientCallName: 'client.card.get',
    fullyQualifiedName: 'card.get',
    httpMethod: 'get',
    httpPath: '/card/{id}',
  },
  {
    clientCallName: 'client.cart.clear',
    fullyQualifiedName: 'cart.clear',
    httpMethod: 'delete',
    httpPath: '/cart',
  },
  {
    clientCallName: 'client.cart.convert',
    fullyQualifiedName: 'cart.convert',
    httpMethod: 'post',
    httpPath: '/cart/convert',
  },
  {
    clientCallName: 'client.cart.get',
    fullyQualifiedName: 'cart.get',
    httpMethod: 'get',
    httpPath: '/cart',
  },
  {
    clientCallName: 'client.cart.setAddress',
    fullyQualifiedName: 'cart.setAddress',
    httpMethod: 'put',
    httpPath: '/cart/address',
  },
  {
    clientCallName: 'client.cart.setCard',
    fullyQualifiedName: 'cart.setCard',
    httpMethod: 'put',
    httpPath: '/cart/card',
  },
  {
    clientCallName: 'client.cart.setItem',
    fullyQualifiedName: 'cart.setItem',
    httpMethod: 'put',
    httpPath: '/cart/item',
  },
  {
    clientCallName: 'client.order.create',
    fullyQualifiedName: 'order.create',
    httpMethod: 'post',
    httpPath: '/order',
  },
  {
    clientCallName: 'client.order.list',
    fullyQualifiedName: 'order.list',
    httpMethod: 'get',
    httpPath: '/order',
  },
  {
    clientCallName: 'client.order.get',
    fullyQualifiedName: 'order.get',
    httpMethod: 'get',
    httpPath: '/order/{id}',
  },
  {
    clientCallName: 'client.subscription.create',
    fullyQualifiedName: 'subscription.create',
    httpMethod: 'post',
    httpPath: '/subscription',
  },
  {
    clientCallName: 'client.subscription.update',
    fullyQualifiedName: 'subscription.update',
    httpMethod: 'put',
    httpPath: '/subscription/{id}',
  },
  {
    clientCallName: 'client.subscription.list',
    fullyQualifiedName: 'subscription.list',
    httpMethod: 'get',
    httpPath: '/subscription',
  },
  {
    clientCallName: 'client.subscription.delete',
    fullyQualifiedName: 'subscription.delete',
    httpMethod: 'delete',
    httpPath: '/subscription/{id}',
  },
  {
    clientCallName: 'client.subscription.get',
    fullyQualifiedName: 'subscription.get',
    httpMethod: 'get',
    httpPath: '/subscription/{id}',
  },
  {
    clientCallName: 'client.token.create',
    fullyQualifiedName: 'token.create',
    httpMethod: 'post',
    httpPath: '/token',
  },
  {
    clientCallName: 'client.token.list',
    fullyQualifiedName: 'token.list',
    httpMethod: 'get',
    httpPath: '/token',
  },
  {
    clientCallName: 'client.token.delete',
    fullyQualifiedName: 'token.delete',
    httpMethod: 'delete',
    httpPath: '/token/{id}',
  },
  {
    clientCallName: 'client.token.get',
    fullyQualifiedName: 'token.get',
    httpMethod: 'get',
    httpPath: '/token/{id}',
  },
  {
    clientCallName: 'client.app.create',
    fullyQualifiedName: 'app.create',
    httpMethod: 'post',
    httpPath: '/app',
  },
  {
    clientCallName: 'client.app.list',
    fullyQualifiedName: 'app.list',
    httpMethod: 'get',
    httpPath: '/app',
  },
  {
    clientCallName: 'client.app.delete',
    fullyQualifiedName: 'app.delete',
    httpMethod: 'delete',
    httpPath: '/app/{id}',
  },
  {
    clientCallName: 'client.app.get',
    fullyQualifiedName: 'app.get',
    httpMethod: 'get',
    httpPath: '/app/{id}',
  },
  {
    clientCallName: 'client.email.create',
    fullyQualifiedName: 'email.create',
    httpMethod: 'post',
    httpPath: '/email',
  },
  {
    clientCallName: 'client.view.init',
    fullyQualifiedName: 'view.init',
    httpMethod: 'get',
    httpPath: '/view/init',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
