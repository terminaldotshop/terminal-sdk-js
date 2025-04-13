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
  name: 'clear_cart',
  description: "Clear the current user's cart.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: any) => {
  const {} = args;
  return client.cart.clear();
};

export default { metadata, tool, handler };
