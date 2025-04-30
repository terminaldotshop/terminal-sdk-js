// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'view',
  operation: 'read',
  tags: [],
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

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.view.init();
};

export default { metadata, tool, handler };
