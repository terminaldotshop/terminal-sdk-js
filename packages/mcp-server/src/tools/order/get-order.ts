// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/{id}',
  operationId: 'getOrderById',
};

export const tool: Tool = {
  name: 'get_order',
  description: 'Get the order with the given ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the order to get.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.order.get(id));
};

export default { metadata, tool, handler };
