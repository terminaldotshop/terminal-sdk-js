// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'cart',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/cart/item',
  operationId: 'putCartItem',
};

export const tool: Tool = {
  name: 'set_item_cart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd an item to the current user's cart.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/cart'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    cart: {\n      type: 'object',\n      description: 'The current Terminal shop user\\'s cart.',\n      properties: {\n        amount: {\n          type: 'object',\n          description: 'The subtotal and shipping amounts for the current user\\'s cart.',\n          properties: {\n            subtotal: {\n              type: 'integer',\n              description: 'Subtotal of the current user\\'s cart, in cents (USD).'\n            },\n            shipping: {\n              type: 'integer',\n              description: 'Shipping amount of the current user\\'s cart, in cents (USD).'\n            },\n            total: {\n              type: 'integer',\n              description: 'Total amount after any discounts, in cents (USD).'\n            }\n          },\n          required: [            'subtotal'\n          ]\n        },\n        items: {\n          type: 'array',\n          description: 'An array of items in the current user\\'s cart.',\n          items: {\n            type: 'object',\n            description: 'An item in the current Terminal shop user\\'s cart.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n              },\n              productVariantID: {\n                type: 'string',\n                description: 'ID of the product variant for this item in the current user\\'s cart.'\n              },\n              quantity: {\n                type: 'integer',\n                description: 'Quantity of the item in the current user\\'s cart.'\n              },\n              subtotal: {\n                type: 'integer',\n                description: 'Subtotal of the item in the current user\\'s cart, in cents (USD).'\n              }\n            },\n            required: [              'id',\n              'productVariantID',\n              'quantity',\n              'subtotal'\n            ]\n          }\n        },\n        subtotal: {\n          type: 'integer',\n          description: 'The subtotal of all items in the current user\\'s cart, in cents (USD).'\n        },\n        addressID: {\n          type: 'string',\n          description: 'ID of the shipping address selected on the current user\\'s cart.'\n        },\n        cardID: {\n          type: 'string',\n          description: 'ID of the card selected on the current user\\'s cart.'\n        },\n        shipping: {\n          type: 'object',\n          description: 'Shipping information for the current user\\'s cart.',\n          properties: {\n            service: {\n              type: 'string',\n              description: 'Shipping service name.'\n            },\n            timeframe: {\n              type: 'string',\n              description: 'Shipping timeframe provided by the shipping carrier.'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'amount',\n        'items',\n        'subtotal'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      productVariantID: {
        type: 'string',
        description: 'ID of the product variant to add to the cart.',
      },
      quantity: {
        type: 'integer',
        description: 'Quantity of the item to add to the cart.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.cart.setItem(body)));
};

export default { metadata, tool, handler };
