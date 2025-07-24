// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'address',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/address',
  operationId: 'postAddress',
};

export const tool: Tool = {
  name: 'create_address',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate and add a shipping address to the current user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'string',\n      description: 'Shipping address ID.'\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      city: {
        type: 'string',
        description: 'City of the address.',
      },
      country: {
        type: 'string',
        description: 'ISO 3166-1 alpha-2 country code of the address.',
      },
      name: {
        type: 'string',
        description: "The recipient's name.",
      },
      street1: {
        type: 'string',
        description: 'Street of the address.',
      },
      zip: {
        type: 'string',
        description: 'Zip code of the address.',
      },
      phone: {
        type: 'string',
        description: 'Phone number of the recipient.',
      },
      province: {
        type: 'string',
        description: 'Province or state of the address.',
      },
      street2: {
        type: 'string',
        description: 'Apartment, suite, etc. of the address.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['city', 'country', 'name', 'street1', 'zip'],
  },
  annotations: {},
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.address.create(body)));
};

export default { metadata, tool, handler };
