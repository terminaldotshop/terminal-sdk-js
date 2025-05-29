// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Get the personal access token with the given ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the personal token to get.',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.token.get(id);
};

export default { metadata, tool, handler };
