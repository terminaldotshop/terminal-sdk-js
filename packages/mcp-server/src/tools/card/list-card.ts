// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/card',
  operationId: 'getCard',
};

export const tool: Tool = {
  name: 'list_card',
  description: 'List the credit cards associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.card.list();
};

export default { metadata, tool, handler };
