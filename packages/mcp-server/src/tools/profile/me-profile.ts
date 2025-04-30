// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'profile',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'me_profile',
  description: "Get the current user's profile.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  return client.profile.me();
};

export default { metadata, tool, handler };
