// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/cart/item',
  operationId: 'putCartItem',
};

export const tool: Tool = {
  name: 'set_item_cart',
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

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.cart.setItem(body));
};

export default { metadata, tool, handler };
