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
  httpPath: '/token',
  operationId: 'getToken',
};

export const tool: Tool = {
  name: 'list_token',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the current user's personal access tokens.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token_list_response',\n  $defs: {\n    token_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'List of personal access tokens.',\n          items: {\n            $ref: '#/$defs/token'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    token: {\n      type: 'object',\n      description: 'A personal access token used to access the Terminal API. If you leak this, expect large sums of coffee to be ordered on your credit card.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        token: {\n          type: 'string',\n          description: 'Personal access token (obfuscated).'\n        },\n        created: {\n          type: 'string',\n          description: 'The created time for the token.'\n        }\n      },\n      required: [        'id',\n        'token',\n        'created'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.token.list()));
};

export default { metadata, tool, handler };
