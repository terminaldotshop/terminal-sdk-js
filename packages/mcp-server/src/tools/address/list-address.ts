// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'address',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/address',
  operationId: 'getAddress',
};

export const tool: Tool = {
  name: 'list_address',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the shipping addresses associated with the current user.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'Shipping addresses.',\n      items: {\n        $ref: '#/$defs/address'\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    address: {\n      type: 'object',\n      description: 'Physical address associated with a Terminal shop user.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        city: {\n          type: 'string',\n          description: 'City of the address.'\n        },\n        country: {\n          type: 'string',\n          description: 'ISO 3166-1 alpha-2 country code of the address.'\n        },\n        created: {\n          type: 'string',\n          description: 'Date the address was created.'\n        },\n        name: {\n          type: 'string',\n          description: 'The recipient\\'s name.'\n        },\n        street1: {\n          type: 'string',\n          description: 'Street of the address.'\n        },\n        zip: {\n          type: 'string',\n          description: 'Zip code of the address.'\n        },\n        phone: {\n          type: 'string',\n          description: 'Phone number of the recipient.'\n        },\n        province: {\n          type: 'string',\n          description: 'Province or state of the address.'\n        },\n        street2: {\n          type: 'string',\n          description: 'Apartment, suite, etc. of the address.'\n        }\n      },\n      required: [        'id',\n        'city',\n        'country',\n        'created',\n        'name',\n        'street1',\n        'zip'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.address.list()));
};

export default { metadata, tool, handler };
