// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_order',
  description: 'List the orders associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: any) => {
  const {} = args;
  return client.order.list();
};

export default { metadata, tool, handler };
