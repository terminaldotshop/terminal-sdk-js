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
  httpPath: '/cart/address',
  operationId: 'putCartAddress',
};

export const tool: Tool = {
  name: 'set_address_cart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSet the shipping address for the current user's cart.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cart_set_address_response',\n  $defs: {\n    cart_set_address_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string',\n          enum: [            'ok'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      addressID: {
        type: 'string',
        description: "ID of the shipping address to set for the current user's cart.",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['addressID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.cart.setAddress(body)));
};

export default { metadata, tool, handler };
