// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'product',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/{id}',
  operationId: 'getProductById',
};

export const tool: Tool = {
  name: 'get_product',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a product by ID from the Terminal shop.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/product'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    product: {\n      type: 'object',\n      description: 'Product sold in the Terminal shop.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the product.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the product.'\n        },\n        variants: {\n          type: 'array',\n          description: 'List of variants of the product.',\n          items: {\n            $ref: '#/$defs/product_variant'\n          }\n        },\n        order: {\n          type: 'integer',\n          description: 'Order of the product used when displaying a sorted list of products.'\n        },\n        subscription: {\n          type: 'string',\n          description: 'Whether the product must be or can be subscribed to.',\n          enum: [            'allowed',\n            'required'\n          ]\n        },\n        tags: {\n          type: 'object',\n          description: 'Tags for the product.',\n          properties: {\n            app: {\n              type: 'string'\n            },\n            color: {\n              type: 'string'\n            },\n            featured: {\n              type: 'boolean'\n            },\n            market_eu: {\n              type: 'boolean'\n            },\n            market_global: {\n              type: 'boolean'\n            },\n            market_na: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'description',\n        'name',\n        'variants'\n      ]\n    },\n    product_variant: {\n      type: 'object',\n      description: 'Variant of a product in the Terminal shop.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the product variant.'\n        },\n        price: {\n          type: 'integer',\n          description: 'Price of the product variant in cents (USD).'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the product variant.'\n        },\n        tags: {\n          type: 'object',\n          description: 'Tags for the product variant.',\n          properties: {\n            app: {\n              type: 'string'\n            },\n            market_eu: {\n              type: 'boolean'\n            },\n            market_global: {\n              type: 'boolean'\n            },\n            market_na: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'id',\n        'name',\n        'price'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the product to get.',
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
  return asTextContentResult(await maybeFilter(args, await client.product.get(id)));
};

export default { metadata, tool, handler };
