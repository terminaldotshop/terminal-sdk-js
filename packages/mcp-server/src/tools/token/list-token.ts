// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'token',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/token',
  operationId: 'getToken',
};

export const tool: Tool = {
  name: 'list_token',
  description: "List the current user's personal access tokens.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.token.list());
};

export default { metadata, tool, handler };
