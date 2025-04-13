// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminaldotshop/sdk';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import list_product from './product/list-product';
import get_product from './product/get-product';
import update_profile from './profile/update-profile';
import me_profile from './profile/me-profile';
import create_address from './address/create-address';
import list_address from './address/list-address';
import delete_address from './address/delete-address';
import get_address from './address/get-address';
import create_card from './card/create-card';
import list_card from './card/list-card';
import delete_card from './card/delete-card';
import collect_card from './card/collect-card';
import get_card from './card/get-card';
import clear_cart from './cart/clear-cart';
import convert_cart from './cart/convert-cart';
import get_cart from './cart/get-cart';
import setAddress_cart from './cart/set-address-cart';
import setCard_cart from './cart/set-card-cart';
import setItem_cart from './cart/set-item-cart';
import create_order from './order/create-order';
import list_order from './order/list-order';
import get_order from './order/get-order';
import create_subscription from './subscription/create-subscription';
import list_subscription from './subscription/list-subscription';
import delete_subscription from './subscription/delete-subscription';
import get_subscription from './subscription/get-subscription';
import create_token from './token/create-token';
import list_token from './token/list-token';
import delete_token from './token/delete-token';
import get_token from './token/get-token';
import create_app from './app/create-app';
import list_app from './app/list-app';
import delete_app from './app/delete-app';
import get_app from './app/get-app';
import create_email from './email/create-email';
import init_view from './view/init-view';

export type HandlerFunction = (client: Terminal, args: any) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_product);
addEndpoint(get_product);
addEndpoint(update_profile);
addEndpoint(me_profile);
addEndpoint(create_address);
addEndpoint(list_address);
addEndpoint(delete_address);
addEndpoint(get_address);
addEndpoint(create_card);
addEndpoint(list_card);
addEndpoint(delete_card);
addEndpoint(collect_card);
addEndpoint(get_card);
addEndpoint(clear_cart);
addEndpoint(convert_cart);
addEndpoint(get_cart);
addEndpoint(setAddress_cart);
addEndpoint(setCard_cart);
addEndpoint(setItem_cart);
addEndpoint(create_order);
addEndpoint(list_order);
addEndpoint(get_order);
addEndpoint(create_subscription);
addEndpoint(list_subscription);
addEndpoint(delete_subscription);
addEndpoint(get_subscription);
addEndpoint(create_token);
addEndpoint(list_token);
addEndpoint(delete_token);
addEndpoint(get_token);
addEndpoint(create_app);
addEndpoint(list_app);
addEndpoint(delete_app);
addEndpoint(get_app);
addEndpoint(create_email);
addEndpoint(init_view);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }
  const allExcludes = filters.every((filter) => filter.op === 'exclude');

  return endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        included = filter.op === 'include';
      }
    }

    return included;
  });
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
