// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a subscription for the current user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_create_response',\n  $defs: {\n    subscription_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string',\n          enum: [            'ok'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'addressID', 'cardID', 'created', 'price', 'productVariantID', 'quantity'],
  },
  annotations: {},
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.subscription.create(body)));
  } catch (error) {
    if (error instanceof Terminal.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
