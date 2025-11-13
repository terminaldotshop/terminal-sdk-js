// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/card/{id}',
  operationId: 'getCardById',
};

export const tool: Tool = {
  name: 'get_card',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a credit card by ID associated with the current user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/card_get_response',\n  $defs: {\n    card_get_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/card'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    card: {\n      type: 'object',\n      description: 'Credit card used for payments in the Terminal shop.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        brand: {\n          type: 'string',\n          description: 'Brand of the card.'\n        },\n        created: {\n          type: 'string',\n          description: 'Date the card was created.'\n        },\n        expiration: {\n          type: 'object',\n          description: 'Expiration of the card.',\n          properties: {\n            month: {\n              type: 'integer',\n              description: 'Expiration month of the card.'\n            },\n            year: {\n              type: 'integer',\n              description: 'Expiration year of the card.'\n            }\n          },\n          required: [            'month',\n            'year'\n          ]\n        },\n        last4: {\n          type: 'string',\n          description: 'Last four digits of the card.'\n        }\n      },\n      required: [        'id',\n        'brand',\n        'created',\n        'expiration',\n        'last4'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the card to get.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.card.get(id)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
