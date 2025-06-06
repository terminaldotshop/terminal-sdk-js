// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/cart',
  operationId: 'deleteCart',
};

export const tool: Tool = {
  name: 'clear_cart',
  description: "Clear the current user's cart.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.cart.clear());
};

export default { metadata, tool, handler };
