// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'card',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/card',
  operationId: 'postCard',
};

export const tool: Tool = {
  name: 'create_card',
  description: 'Attach a credit card (tokenized via Stripe) to the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      token: {
        type: 'string',
        description:
          'Stripe card token. Learn how to [create one here](https://docs.stripe.com/api/tokens/create_card).',
      },
    },
  },
};

export const handler = (client: Terminal, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.card.create(body);
};

export default { metadata, tool, handler };
