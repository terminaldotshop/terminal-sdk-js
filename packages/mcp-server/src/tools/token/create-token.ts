// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'token',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/token',
  operationId: 'postToken',
};

export const tool: Tool = {
  name: 'create_token',
  description: 'Create a personal access token.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.token.create());
};

export default { metadata, tool, handler };
