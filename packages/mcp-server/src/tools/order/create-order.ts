// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/order',
  operationId: 'postOrder',
};

export const tool: Tool = {
  name: 'create_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an order without a cart. The order will be placed immediately.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/order_create_response',\n  $defs: {\n    order_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string',\n          description: 'Order ID.'\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      addressID: {
        type: 'string',
        description: 'Shipping address ID.',
      },
      cardID: {
        type: 'string',
        description: 'Card ID.',
      },
      variants: {
        type: 'object',
        description: 'Product variants to include in the order, along with their quantities.',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['addressID', 'cardID', 'variants'],
  },
  annotations: {},
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.order.create(body)));
};

export default { metadata, tool, handler };
