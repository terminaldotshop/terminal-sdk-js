// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'subscription',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/subscription',
  operationId: 'postSubscription',
};

export const tool: Tool = {
  name: 'create_subscription',
  description: 'Create a subscription for the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique object identifier.\nThe format and length of IDs may change over time.',
      },
      addressID: {
        type: 'string',
        description: 'ID of the shipping address used for the subscription.',
      },
      cardID: {
        type: 'string',
        description: 'ID of the card used for the subscription.',
      },
      created: {
        type: 'string',
        description: 'Date the subscription was created.',
      },
      price: {
        type: 'integer',
        description: 'Price of the subscription in cents (USD).',
      },
      productVariantID: {
        type: 'string',
        description: 'ID of the product variant being subscribed to.',
      },
      quantity: {
        type: 'integer',
        description: 'Quantity of the subscription.',
      },
      next: {
        type: 'string',
        description: 'Next shipment and billing date for the subscription.',
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
        description: 'Schedule of the subscription.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscription.create(body));
};

export default { metadata, tool, handler };
