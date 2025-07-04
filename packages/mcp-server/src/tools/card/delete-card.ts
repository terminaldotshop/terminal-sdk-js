// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/card/{id}',
  operationId: 'deleteCardById',
};

export const tool: Tool = {
  name: 'delete_card',
  description: 'Delete a credit card associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the card to delete.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.card.delete(id));
};

export default { metadata, tool, handler };
