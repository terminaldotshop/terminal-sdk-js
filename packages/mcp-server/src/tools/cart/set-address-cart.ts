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
  name: 'setAddress_cart',
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

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.cart.setAddress(body);
};

export default { metadata, tool, handler };
