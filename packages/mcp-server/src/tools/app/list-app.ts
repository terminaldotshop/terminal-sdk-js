// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'app',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/app',
  operationId: 'getApp',
};

export const tool: Tool = {
  name: 'list_app',
  description: "List the current user's registered apps.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.app.list());
};

export default { metadata, tool, handler };
