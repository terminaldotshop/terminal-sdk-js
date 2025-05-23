// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_order',
  description: 'Create an order without a cart. The order will be placed immediately.',
  inputSchema: {
    type: 'object',
    properties: {
      addressID: {
        type: 'string',
        description: 'Shipping address ID.',
      },
      cardID: {
        type: 'string',
        description: 'Card ID.',
      },
      variants: {
        type: 'object',
        description: 'Product variants to include in the order, along with their quantities.',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.order.create(body);
};

export default { metadata, tool, handler };
