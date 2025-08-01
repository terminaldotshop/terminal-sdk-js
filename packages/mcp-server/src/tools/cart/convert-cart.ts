// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/cart/convert',
  operationId: 'postCartConvert',
};

export const tool: Tool = {
  name: 'convert_cart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConvert the current user's cart to an order.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/order'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    order: {\n      type: 'object',\n      description: 'An order from the Terminal shop.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        amount: {\n          type: 'object',\n          description: 'The subtotal and shipping amounts of the order.',\n          properties: {\n            shipping: {\n              type: 'integer',\n              description: 'Shipping amount of the order, in cents (USD).'\n            },\n            subtotal: {\n              type: 'integer',\n              description: 'Subtotal amount of the order, in cents (USD).'\n            }\n          },\n          required: [            'shipping',\n            'subtotal'\n          ]\n        },\n        created: {\n          type: 'string',\n          description: 'Date the order was created.'\n        },\n        items: {\n          type: 'array',\n          description: 'Items in the order.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n              },\n              amount: {\n                type: 'integer',\n                description: 'Amount of the item in the order, in cents (USD).'\n              },\n              quantity: {\n                type: 'integer',\n                description: 'Quantity of the item in the order.'\n              },\n              description: {\n                type: 'string',\n                description: 'Description of the item in the order.'\n              },\n              productVariantID: {\n                type: 'string',\n                description: 'ID of the product variant of the item in the order.'\n              }\n            },\n            required: [              'id',\n              'amount',\n              'quantity'\n            ]\n          }\n        },\n        shipping: {\n          type: 'object',\n          description: 'Shipping address of the order.',\n          properties: {\n            city: {\n              type: 'string',\n              description: 'City of the address.'\n            },\n            country: {\n              type: 'string',\n              description: 'ISO 3166-1 alpha-2 country code of the address.'\n            },\n            name: {\n              type: 'string',\n              description: 'The recipient\\'s name.'\n            },\n            street1: {\n              type: 'string',\n              description: 'Street of the address.'\n            },\n            zip: {\n              type: 'string',\n              description: 'Zip code of the address.'\n            },\n            phone: {\n              type: 'string',\n              description: 'Phone number of the recipient.'\n            },\n            province: {\n              type: 'string',\n              description: 'Province or state of the address.'\n            },\n            street2: {\n              type: 'string',\n              description: 'Apartment, suite, etc. of the address.'\n            }\n          },\n          required: [            'city',\n            'country',\n            'name',\n            'street1',\n            'zip'\n          ]\n        },\n        tracking: {\n          type: 'object',\n          description: 'Tracking information of the order.',\n          properties: {\n            number: {\n              type: 'string',\n              description: 'Tracking number of the order.'\n            },\n            service: {\n              type: 'string',\n              description: 'Shipping service of the order.'\n            },\n            status: {\n              type: 'string',\n              description: 'Current tracking status of the shipment.',\n              enum: [                'PRE_TRANSIT',\n                'TRANSIT',\n                'DELIVERED',\n                'RETURNED',\n                'FAILURE',\n                'UNKNOWN'\n              ]\n            },\n            statusDetails: {\n              type: 'string',\n              description: 'Additional details about the tracking status.'\n            },\n            statusUpdatedAt: {\n              type: 'string',\n              description: 'When the tracking status was last updated.'\n            },\n            url: {\n              type: 'string',\n              description: 'Tracking URL of the order.'\n            }\n          }\n        },\n        index: {\n          type: 'integer',\n          description: 'Zero-based index of the order for this user only.'\n        }\n      },\n      required: [        'id',\n        'amount',\n        'created',\n        'items',\n        'shipping',\n        'tracking'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.cart.convert()));
};

export default { metadata, tool, handler };
