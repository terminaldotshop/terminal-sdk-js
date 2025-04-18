// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'setItem_cart',
  description: "Add an item to the current user's cart.",
  inputSchema: {
    type: 'object',
    properties: {
      productVariantID: {
        type: 'string',
        description: 'ID of the product variant to add to the cart.',
      },
      quantity: {
        type: 'integer',
        description: 'Quantity of the item to add to the cart.',
      },
    },
  },
};

export const handler = (client: Terminal, args: any) => {
  const { ...body } = args;
  return client.cart.setItem(body);
};

export default { metadata, tool, handler };
