// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'app',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/app/{id}',
  operationId: 'getAppById',
};

export const tool: Tool = {
  name: 'get_app',
  description: 'Get the app with the given ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the app to get.',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.app.get(id);
};

export default { metadata, tool, handler };
