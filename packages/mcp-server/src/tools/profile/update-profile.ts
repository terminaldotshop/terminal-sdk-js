// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'profile',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/profile',
  operationId: 'putProfile',
};

export const tool: Tool = {
  name: 'update_profile',
  description: "Update the current user's profile.",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.profile.update(body));
};

export default { metadata, tool, handler };
