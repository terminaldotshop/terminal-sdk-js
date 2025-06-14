// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'subscription',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/subscription/{id}',
  operationId: 'deleteSubscriptionById',
};

export const tool: Tool = {
  name: 'delete_subscription',
  description: 'Cancel a subscription for the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the subscription to cancel.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.subscription.delete(id));
};

export default { metadata, tool, handler };
