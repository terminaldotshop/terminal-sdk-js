// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@terminaldotshop/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/card/collect',
  operationId: 'postCardCollect',
};

export const tool: Tool = {
  name: 'collect_card',
  description: 'Create a temporary URL for collecting credit card information for the current user.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Terminal, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.card.collect());
};

export default { metadata, tool, handler };
