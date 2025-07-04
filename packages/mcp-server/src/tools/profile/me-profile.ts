// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'profile',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/profile',
  operationId: 'getProfile',
};

export const tool: Tool = {
  name: 'me_profile',
  description: "Get the current user's profile.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.profile.me());
};

export default { metadata, tool, handler };
