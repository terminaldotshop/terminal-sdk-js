// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'address',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/address/{id}',
  operationId: 'deleteAddressById',
};

export const tool: Tool = {
  name: 'delete_address',
  description: 'Delete a shipping address from the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the shipping address to delete.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.address.delete(id));
};

export default { metadata, tool, handler };
