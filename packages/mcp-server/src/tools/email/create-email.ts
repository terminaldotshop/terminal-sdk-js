// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'email',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/email',
  operationId: 'postEmail',
};

export const tool: Tool = {
  name: 'create_email',
  description: 'Subscribe to email updates from Terminal.',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Email address to subscribe to Terminal updates with.',
      },
    },
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.email.create(body));
};

export default { metadata, tool, handler };
