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
  httpPath: '/cart/address',
  operationId: 'putCartAddress',
};

export const tool: Tool = {
  name: 'set_address_cart',
  description: "Set the shipping address for the current user's cart.",
  inputSchema: {
    type: 'object',
    properties: {
      addressID: {
        type: 'string',
        description: "ID of the shipping address to set for the current user's cart.",
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.cart.setAddress(body));
};

export default { metadata, tool, handler };
