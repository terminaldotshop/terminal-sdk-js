// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'email',
  operation: 'write',
  tags: [],
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

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.email.create(body);
};

export default { metadata, tool, handler };
