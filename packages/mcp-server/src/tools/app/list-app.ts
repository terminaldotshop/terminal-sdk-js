// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'app',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_app',
  description: "List the current user's registered apps.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.app.list();
};

export default { metadata, tool, handler };
