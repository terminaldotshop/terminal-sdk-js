// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate card, address, or interval for an existing subscription.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/subscription'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    subscription: {\n      type: 'object',\n      description: 'Subscription to a Terminal shop product.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        addressID: {\n          type: 'string',\n          description: 'ID of the shipping address used for the subscription.'\n        },\n        cardID: {\n          type: 'string',\n          description: 'ID of the card used for the subscription.'\n        },\n        created: {\n          type: 'string',\n          description: 'Date the subscription was created.'\n        },\n        price: {\n          type: 'integer',\n          description: 'Price of the subscription in cents (USD).'\n        },\n        productVariantID: {\n          type: 'string',\n          description: 'ID of the product variant being subscribed to.'\n        },\n        quantity: {\n          type: 'integer',\n          description: 'Quantity of the subscription.'\n        },\n        next: {\n          type: 'string',\n          description: 'Next shipment and billing date for the subscription.'\n        },\n        schedule: {\n          anyOf: [            {\n              type: 'object',\n              title: 'fixed',\n              properties: {\n                type: {\n                  type: 'string',\n                  enum: [                    'fixed'\n                  ]\n                }\n              },\n              required: [                'type'\n              ]\n            },\n            {\n              type: 'object',\n              title: 'weekly',\n              properties: {\n                interval: {\n                  type: 'integer'\n                },\n                type: {\n                  type: 'string',\n                  enum: [                    'weekly'\n                  ]\n                }\n              },\n              required: [                'interval',\n                'type'\n              ]\n            }\n          ],\n          description: 'Schedule of the subscription.'\n        }\n      },\n      required: [        'id',\n        'addressID',\n        'cardID',\n        'created',\n        'price',\n        'productVariantID',\n        'quantity'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.subscription.update(id, body)));
};

export default { metadata, tool, handler };
