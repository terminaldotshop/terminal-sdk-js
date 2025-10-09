// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@terminaldotshop/mcp/filtering';
import { Metadata, asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/card',
  operationId: 'postCard',
};

export const tool: Tool = {
  name: 'create_card',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAttach a credit card (tokenized via Stripe) to the current user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/card_create_response',\n  $defs: {\n    card_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'string',\n          description: 'ID of the card.'\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
        description:
          'Stripe card token. Learn how to [create one here](https://docs.stripe.com/api/tokens/create_card).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['token'],
  },
  annotations: {},
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.card.create(body)));
};

export default { metadata, tool, handler };
