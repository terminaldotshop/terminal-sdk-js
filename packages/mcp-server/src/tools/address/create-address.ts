// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Terminal from '@terminaldotshop/sdk';

export const metadata: Metadata = {
  resource: 'address',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_address',
  description: 'Create and add a shipping address to the current user.',
  inputSchema: {
    type: 'object',
    properties: {
      city: {
        type: 'string',
        description: 'City of the address.',
      },
      country: {
        type: 'string',
        description: 'ISO 3166-1 alpha-2 country code of the address.',
      },
      name: {
        type: 'string',
        description: "The recipient's name.",
      },
      street1: {
        type: 'string',
        description: 'Street of the address.',
      },
      zip: {
        type: 'string',
        description: 'Zip code of the address.',
      },
      phone: {
        type: 'string',
        description: 'Phone number of the recipient.',
      },
      province: {
        type: 'string',
        description: 'Province or state of the address.',
      },
      street2: {
        type: 'string',
        description: 'Apartment, suite, etc. of the address.',
      },
    },
  },
};

export const handler = (client: Terminal, args: any) => {
  const { ...body } = args;
  return client.address.create(body);
};

export default { metadata, tool, handler };
