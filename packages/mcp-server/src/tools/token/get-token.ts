// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'token',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/token/{id}',
  operationId: 'getTokenById',
};

export const tool: Tool = {
  name: 'get_token',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the personal access token with the given ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_get_response',\n  $defs: {\n    token_get_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/token'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    token: {\n      type: 'object',\n      description: 'A personal access token used to access the Terminal API. If you leak this, expect large sums of coffee to be ordered on your credit card.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        token: {\n          type: 'string',\n          description: 'Personal access token (obfuscated).'\n        },\n        created: {\n          type: 'string',\n          description: 'The created time for the token.'\n        }\n      },\n      required: [        'id',\n        'token',\n        'created'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the personal token to get.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.token.get(id)));
};

export default { metadata, tool, handler };
