// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'app',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/app',
  operationId: 'getApp',
};

export const tool: Tool = {
  name: 'list_app',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList the current user's registered apps.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'List of apps.',\n      items: {\n        $ref: '#/$defs/app'\n      }\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    app: {\n      type: 'object',\n      description: 'A Terminal App used for configuring an OAuth 2.0 client.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique object identifier.\\nThe format and length of IDs may change over time.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the app.'\n        },\n        redirectURI: {\n          type: 'string',\n          description: 'Redirect URI of the app.'\n        },\n        secret: {\n          type: 'string',\n          description: 'OAuth 2.0 client secret of the app (obfuscated).'\n        }\n      },\n      required: [        'id',\n        'name',\n        'redirectURI',\n        'secret'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.app.list()));
};

export default { metadata, tool, handler };
