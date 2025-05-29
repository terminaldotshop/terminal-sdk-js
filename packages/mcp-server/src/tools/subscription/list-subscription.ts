// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'subscription',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/subscription',
  operationId: 'getSubscription',
};

export const tool: Tool = {
  name: 'list_subscription',
  description: 'List the subscriptions associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.subscription.list();
};

export default { metadata, tool, handler };
