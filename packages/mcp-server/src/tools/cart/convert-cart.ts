// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/cart/convert',
  operationId: 'postCartConvert',
};

export const tool: Tool = {
  name: 'convert_cart',
  description: "Convert the current user's cart to an order.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.cart.convert();
};

export default { metadata, tool, handler };
