// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/profile',
  operationId: 'getProfile',
};

export const tool: Tool = {
  name: 'me_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the current user's profile.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/profile'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    profile: {\n      type: 'object',\n      description: 'A Terminal shop user\\'s profile. (We have users, btw.)',\n      properties: {\n        user: {\n          type: 'object',\n          description: 'A Terminal shop user. (We have users, btw.)',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n            },\n            email: {\n              type: 'string',\n              description: 'Email address of the user.'\n            },\n            fingerprint: {\n              type: 'string',\n              description: 'The user\\'s fingerprint, derived from their public SSH key.'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the user.'\n            },\n            stripeCustomerID: {\n              type: 'string',\n              description: 'Stripe customer ID of the user.'\n            }\n          },\n          required: [            'id',\n            'email',\n            'fingerprint',\n            'name',\n            'stripeCustomerID'\n          ]\n        }\n      },\n      required: [        'user'\n      ]\n    }\n  }\n}\n```",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.profile.me()));
};

export default { metadata, tool, handler };
