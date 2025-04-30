// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'app',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_app',
  description: 'Create an app.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      redirectURI: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.app.create(body);
};

export default { metadata, tool, handler };
