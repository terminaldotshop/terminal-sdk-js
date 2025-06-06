// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'product',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/{id}',
  operationId: 'getProductById',
};

export const tool: Tool = {
  name: 'get_product',
  description: 'Get a product by ID from the Terminal shop.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'ID of the product to get.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.product.get(id));
};

export default { metadata, tool, handler };
