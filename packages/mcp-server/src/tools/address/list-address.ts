// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'address',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/address',
  operationId: 'getAddress',
};

export const tool: Tool = {
  name: 'list_address',
  description: 'Get the shipping addresses associated with the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.address.list());
};

export default { metadata, tool, handler };
