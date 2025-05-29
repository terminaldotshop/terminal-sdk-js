// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'subscription',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/subscription/{id}',
  operationId: 'putSubscriptionById',
};

export const tool: Tool = {
  name: 'update_subscription',
  description: 'Update card, address, or interval for an existing subscription.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the subscription to update.',
      },
      addressID: {
        type: 'string',
        description: 'New shipping address ID for the subscription.',
      },
      cardID: {
        type: 'string',
        description: 'New payment method ID for the subscription.',
      },
      schedule: {
        anyOf: [
          {
            type: 'object',
            title: 'fixed',
            properties: {
              type: {
                type: 'string',
                enum: ['fixed'],
              },
            },
            required: ['type'],
          },
          {
            type: 'object',
            title: 'weekly',
            properties: {
              interval: {
                type: 'integer',
              },
              type: {
                type: 'string',
                enum: ['weekly'],
              },
            },
            required: ['interval', 'type'],
          },
        ],
        description: 'New schedule for the subscription.',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.subscription.update(id, body);
};

export default { metadata, tool, handler };
