// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/card/{id}',
  operationId: 'getCardById',
};

export const tool: Tool = {
  name: 'get_card',
  description: 'Get a credit card by ID associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the card to get.',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.card.get(id);
};

export default { metadata, tool, handler };
