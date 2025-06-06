// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'view',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/view/init',
  operationId: 'getViewInit',
};

export const tool: Tool = {
  name: 'init_view',
  description:
    'Get initial app data, including user, products, cart, addresses, cards, subscriptions, and orders.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.view.init());
};

export default { metadata, tool, handler };
