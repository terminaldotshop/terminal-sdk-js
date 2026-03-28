// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/product',
    httpMethod: 'get',
    summary: 'List products',
    description: 'List all products for sale in the Terminal shop.',
    stainlessPath: '(resource) product > (method) list',
    qualified: 'client.product.list',
    response:
      "{ data: { id: string; description: string; name: string; variants: product_variant[]; order?: number; subscription?: 'allowed' | 'required'; tags?: object; timeHidden?: string; }[]; }",
    markdown:
      "## list\n\n`client.product.list(): { data: product[]; }`\n\n**get** `/product`\n\nList all products for sale in the Terminal shop.\n\n### Returns\n\n- `{ data: { id: string; description: string; name: string; variants: product_variant[]; order?: number; subscription?: 'allowed' | 'required'; tags?: object; timeHidden?: string; }[]; }`\n\n  - `data: { id: string; description: string; name: string; variants: { id: string; name: string; price: number; tags?: object; }[]; order?: number; subscription?: 'allowed' | 'required'; tags?: { app?: string; color?: string; featured?: boolean; market_eu?: boolean; market_global?: boolean; market_na?: boolean; }; timeHidden?: string; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst products = await client.product.list();\n\nconsole.log(products);\n```",
  },
  {
    name: 'get',
    endpoint: '/product/{id}',
    httpMethod: 'get',
    summary: 'Get product',
    description: 'Get a product by ID from the Terminal shop.',
    stainlessPath: '(resource) product > (method) get',
    qualified: 'client.product.get',
    params: ['id: string;'],
    response:
      "{ data: { id: string; description: string; name: string; variants: product_variant[]; order?: number; subscription?: 'allowed' | 'required'; tags?: object; timeHidden?: string; }; }",
    markdown:
      "## get\n\n`client.product.get(id: string): { data: product; }`\n\n**get** `/product/{id}`\n\nGet a product by ID from the Terminal shop.\n\n### Parameters\n\n- `id: string`\n  ID of the product to get.\n\n### Returns\n\n- `{ data: { id: string; description: string; name: string; variants: product_variant[]; order?: number; subscription?: 'allowed' | 'required'; tags?: object; timeHidden?: string; }; }`\n\n  - `data: { id: string; description: string; name: string; variants: { id: string; name: string; price: number; tags?: object; }[]; order?: number; subscription?: 'allowed' | 'required'; tags?: { app?: string; color?: string; featured?: boolean; market_eu?: boolean; market_global?: boolean; market_na?: boolean; }; timeHidden?: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst product = await client.product.get('prd_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(product);\n```",
  },
  {
    name: 'update',
    endpoint: '/profile',
    httpMethod: 'put',
    summary: 'Update profile',
    description: "Update the current user's profile.",
    stainlessPath: '(resource) profile > (method) update',
    qualified: 'client.profile.update',
    params: ['email: string;', 'name: string;'],
    response: '{ data: { user: object; }; }',
    markdown:
      "## update\n\n`client.profile.update(email: string, name: string): { data: profile; }`\n\n**put** `/profile`\n\nUpdate the current user's profile.\n\n### Parameters\n\n- `email: string`\n\n- `name: string`\n\n### Returns\n\n- `{ data: { user: object; }; }`\n\n  - `data: { user: { id: string; email: string; fingerprint: string; name: string; stripeCustomerID: string; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst profile = await client.profile.update({ email: 'john@example.com', name: 'John Doe' });\n\nconsole.log(profile);\n```",
  },
  {
    name: 'me',
    endpoint: '/profile',
    httpMethod: 'get',
    summary: 'Get profile',
    description: "Get the current user's profile.",
    stainlessPath: '(resource) profile > (method) me',
    qualified: 'client.profile.me',
    response: '{ data: { user: object; }; }',
    markdown:
      "## me\n\n`client.profile.me(): { data: profile; }`\n\n**get** `/profile`\n\nGet the current user's profile.\n\n### Returns\n\n- `{ data: { user: object; }; }`\n\n  - `data: { user: { id: string; email: string; fingerprint: string; name: string; stripeCustomerID: string; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.profile.me();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/address',
    httpMethod: 'post',
    summary: 'Create address',
    description: 'Create and add a shipping address to the current user.',
    stainlessPath: '(resource) address > (method) create',
    qualified: 'client.address.create',
    params: [
      'city: string;',
      'country: string;',
      'name: string;',
      'street1: string;',
      'zip: string;',
      'phone?: string;',
      'province?: string;',
      'street2?: string;',
    ],
    response: '{ data: string; }',
    markdown:
      "## create\n\n`client.address.create(city: string, country: string, name: string, street1: string, zip: string, phone?: string, province?: string, street2?: string): { data: string; }`\n\n**post** `/address`\n\nCreate and add a shipping address to the current user.\n\n### Parameters\n\n- `city: string`\n  City of the address.\n\n- `country: string`\n  ISO 3166-1 alpha-2 country code of the address.\n\n- `name: string`\n  The recipient's name.\n\n- `street1: string`\n  Street of the address.\n\n- `zip: string`\n  Zip code of the address.\n\n- `phone?: string`\n  Phone number of the recipient.\n\n- `province?: string`\n  Province or state of the address.\n\n- `street2?: string`\n  Apartment, suite, etc. of the address.\n\n### Returns\n\n- `{ data: string; }`\n\n  - `data: string`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst address = await client.address.create({\n  city: 'Anytown',\n  country: 'US',\n  name: 'John Doe',\n  street1: '123 Main St',\n  zip: '12345',\n});\n\nconsole.log(address);\n```",
  },
  {
    name: 'list',
    endpoint: '/address',
    httpMethod: 'get',
    summary: 'Get addresses',
    description: 'Get the shipping addresses associated with the current user.',
    stainlessPath: '(resource) address > (method) list',
    qualified: 'client.address.list',
    response:
      '{ data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }[]; }',
    markdown:
      "## list\n\n`client.address.list(): { data: address[]; }`\n\n**get** `/address`\n\nGet the shipping addresses associated with the current user.\n\n### Returns\n\n- `{ data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }[]; }`\n\n  - `data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst addresses = await client.address.list();\n\nconsole.log(addresses);\n```",
  },
  {
    name: 'delete',
    endpoint: '/address/{id}',
    httpMethod: 'delete',
    summary: 'Delete address',
    description: 'Delete a shipping address from the current user.',
    stainlessPath: '(resource) address > (method) delete',
    qualified: 'client.address.delete',
    params: ['id: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## delete\n\n`client.address.delete(id: string): { data: 'ok'; }`\n\n**delete** `/address/{id}`\n\nDelete a shipping address from the current user.\n\n### Parameters\n\n- `id: string`\n  ID of the shipping address to delete.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst address = await client.address.delete('shp_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(address);\n```",
  },
  {
    name: 'get',
    endpoint: '/address/{id}',
    httpMethod: 'get',
    summary: 'Get address',
    description: 'Get the shipping address with the given ID.',
    stainlessPath: '(resource) address > (method) get',
    qualified: 'client.address.get',
    params: ['id: string;'],
    response:
      '{ data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; }',
    markdown:
      "## get\n\n`client.address.get(id: string): { data: address; }`\n\n**get** `/address/{id}`\n\nGet the shipping address with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the shipping address to get.\n\n### Returns\n\n- `{ data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; }`\n\n  - `data: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst address = await client.address.get('shp_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(address);\n```",
  },
  {
    name: 'create',
    endpoint: '/card',
    httpMethod: 'post',
    summary: 'Create card',
    description: 'Attach a credit card (tokenized via Stripe) to the current user.',
    stainlessPath: '(resource) card > (method) create',
    qualified: 'client.card.create',
    params: ['token: string;'],
    response: '{ data: string; }',
    markdown:
      "## create\n\n`client.card.create(token: string): { data: string; }`\n\n**post** `/card`\n\nAttach a credit card (tokenized via Stripe) to the current user.\n\n### Parameters\n\n- `token: string`\n  Stripe card token. Learn how to [create one here](https://docs.stripe.com/api/tokens/create_card).\n\n### Returns\n\n- `{ data: string; }`\n\n  - `data: string`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst card = await client.card.create({ token: 'tok_1N3T00LkdIwHu7ixt44h1F8k' });\n\nconsole.log(card);\n```",
  },
  {
    name: 'list',
    endpoint: '/card',
    httpMethod: 'get',
    summary: 'List cards',
    description: 'List the credit cards associated with the current user.',
    stainlessPath: '(resource) card > (method) list',
    qualified: 'client.card.list',
    response:
      '{ data: { id: string; brand: string; created: string; expiration: object; last4: string; }[]; }',
    markdown:
      "## list\n\n`client.card.list(): { data: card[]; }`\n\n**get** `/card`\n\nList the credit cards associated with the current user.\n\n### Returns\n\n- `{ data: { id: string; brand: string; created: string; expiration: object; last4: string; }[]; }`\n\n  - `data: { id: string; brand: string; created: string; expiration: { month: number; year: number; }; last4: string; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst cards = await client.card.list();\n\nconsole.log(cards);\n```",
  },
  {
    name: 'delete',
    endpoint: '/card/{id}',
    httpMethod: 'delete',
    summary: 'Delete card',
    description: 'Delete a credit card associated with the current user.',
    stainlessPath: '(resource) card > (method) delete',
    qualified: 'client.card.delete',
    params: ['id: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## delete\n\n`client.card.delete(id: string): { data: 'ok'; }`\n\n**delete** `/card/{id}`\n\nDelete a credit card associated with the current user.\n\n### Parameters\n\n- `id: string`\n  ID of the card to delete.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst card = await client.card.delete('crd_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(card);\n```",
  },
  {
    name: 'collect',
    endpoint: '/card/collect',
    httpMethod: 'post',
    summary: 'Collect card',
    description: 'Create a temporary URL for collecting credit card information for the current user.',
    stainlessPath: '(resource) card > (method) collect',
    qualified: 'client.card.collect',
    response: '{ data: { url: string; }; }',
    markdown:
      "## collect\n\n`client.card.collect(): { data: object; }`\n\n**post** `/card/collect`\n\nCreate a temporary URL for collecting credit card information for the current user.\n\n### Returns\n\n- `{ data: { url: string; }; }`\n\n  - `data: { url: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.card.collect();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/card/{id}',
    httpMethod: 'get',
    summary: 'Get card',
    description: 'Get a credit card by ID associated with the current user.',
    stainlessPath: '(resource) card > (method) get',
    qualified: 'client.card.get',
    params: ['id: string;'],
    response: '{ data: { id: string; brand: string; created: string; expiration: object; last4: string; }; }',
    markdown:
      "## get\n\n`client.card.get(id: string): { data: card; }`\n\n**get** `/card/{id}`\n\nGet a credit card by ID associated with the current user.\n\n### Parameters\n\n- `id: string`\n  ID of the card to get.\n\n### Returns\n\n- `{ data: { id: string; brand: string; created: string; expiration: object; last4: string; }; }`\n\n  - `data: { id: string; brand: string; created: string; expiration: { month: number; year: number; }; last4: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst card = await client.card.get('crd_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(card);\n```",
  },
  {
    name: 'clear',
    endpoint: '/cart',
    httpMethod: 'delete',
    summary: 'Clear cart',
    description: "Clear the current user's cart.",
    stainlessPath: '(resource) cart > (method) clear',
    qualified: 'client.cart.clear',
    response: "{ data: 'ok'; }",
    markdown:
      "## clear\n\n`client.cart.clear(): { data: 'ok'; }`\n\n**delete** `/cart`\n\nClear the current user's cart.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.cart.clear();\n\nconsole.log(response);\n```",
  },
  {
    name: 'convert',
    endpoint: '/cart/convert',
    httpMethod: 'post',
    summary: 'Convert to order',
    description: "Convert the current user's cart to an order.",
    stainlessPath: '(resource) cart > (method) convert',
    qualified: 'client.cart.convert',
    response:
      '{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }; }',
    markdown:
      "## convert\n\n`client.cart.convert(): { data: order; }`\n\n**post** `/cart/convert`\n\nConvert the current user's cart to an order.\n\n### Returns\n\n- `{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }; }`\n\n  - `data: { id: string; amount: { shipping: number; subtotal: number; }; created: string; items: { id: string; amount: number; quantity: number; description?: string; productVariantID?: string; }[]; shipping: { city: string; country: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; tracking: { number?: string; service?: string; status?: 'PRE_TRANSIT' | 'TRANSIT' | 'DELIVERED' | 'RETURNED' | 'FAILURE' | 'UNKNOWN'; statusDetails?: string; statusUpdatedAt?: string; url?: string; }; index?: number; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.cart.convert();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/cart',
    httpMethod: 'get',
    summary: 'Get cart',
    description: "Get the current user's cart.",
    stainlessPath: '(resource) cart > (method) get',
    qualified: 'client.cart.get',
    response:
      '{ data: { amount: object; items: object[]; subtotal: number; addressID?: string; cardID?: string; shipping?: object; }; }',
    markdown:
      "## get\n\n`client.cart.get(): { data: cart; }`\n\n**get** `/cart`\n\nGet the current user's cart.\n\n### Returns\n\n- `{ data: { amount: object; items: object[]; subtotal: number; addressID?: string; cardID?: string; shipping?: object; }; }`\n\n  - `data: { amount: { subtotal: number; shipping?: number; total?: number; }; items: { id: string; productVariantID: string; quantity: number; subtotal: number; }[]; subtotal: number; addressID?: string; cardID?: string; shipping?: { service?: string; timeframe?: string; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst cart = await client.cart.get();\n\nconsole.log(cart);\n```",
  },
  {
    name: 'setAddress',
    endpoint: '/cart/address',
    httpMethod: 'put',
    summary: 'Set address',
    description: "Set the shipping address for the current user's cart.",
    stainlessPath: '(resource) cart > (method) setAddress',
    qualified: 'client.cart.setAddress',
    params: ['addressID: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## setAddress\n\n`client.cart.setAddress(addressID: string): { data: 'ok'; }`\n\n**put** `/cart/address`\n\nSet the shipping address for the current user's cart.\n\n### Parameters\n\n- `addressID: string`\n  ID of the shipping address to set for the current user's cart.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.cart.setAddress({ addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'setCard',
    endpoint: '/cart/card',
    httpMethod: 'put',
    summary: 'Set card',
    description: "Set the credit card for the current user's cart.",
    stainlessPath: '(resource) cart > (method) setCard',
    qualified: 'client.cart.setCard',
    params: ['cardID: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## setCard\n\n`client.cart.setCard(cardID: string): { data: 'ok'; }`\n\n**put** `/cart/card`\n\nSet the credit card for the current user's cart.\n\n### Parameters\n\n- `cardID: string`\n  ID of the credit card to set for the current user's cart.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.cart.setCard({ cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'setItem',
    endpoint: '/cart/item',
    httpMethod: 'put',
    summary: 'Add item',
    description: "Add an item to the current user's cart.",
    stainlessPath: '(resource) cart > (method) setItem',
    qualified: 'client.cart.setItem',
    params: ['productVariantID: string;', 'quantity: number;'],
    response:
      '{ data: { amount: object; items: object[]; subtotal: number; addressID?: string; cardID?: string; shipping?: object; }; }',
    markdown:
      "## setItem\n\n`client.cart.setItem(productVariantID: string, quantity: number): { data: cart; }`\n\n**put** `/cart/item`\n\nAdd an item to the current user's cart.\n\n### Parameters\n\n- `productVariantID: string`\n  ID of the product variant to add to the cart.\n\n- `quantity: number`\n  Quantity of the item to add to the cart.\n\n### Returns\n\n- `{ data: { amount: object; items: object[]; subtotal: number; addressID?: string; cardID?: string; shipping?: object; }; }`\n\n  - `data: { amount: { subtotal: number; shipping?: number; total?: number; }; items: { id: string; productVariantID: string; quantity: number; subtotal: number; }[]; subtotal: number; addressID?: string; cardID?: string; shipping?: { service?: string; timeframe?: string; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.cart.setItem({ productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX', quantity: 2 });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/order',
    httpMethod: 'post',
    summary: 'Create order',
    description: 'Create an order without a cart. The order will be placed immediately.',
    stainlessPath: '(resource) order > (method) create',
    qualified: 'client.order.create',
    params: ['addressID: string;', 'cardID: string;', 'variants: object;'],
    response: '{ data: string; }',
    markdown:
      "## create\n\n`client.order.create(addressID: string, cardID: string, variants: object): { data: string; }`\n\n**post** `/order`\n\nCreate an order without a cart. The order will be placed immediately.\n\n### Parameters\n\n- `addressID: string`\n  Shipping address ID.\n\n- `cardID: string`\n  Card ID.\n\n- `variants: object`\n  Product variants to include in the order, along with their quantities.\n\n### Returns\n\n- `{ data: string; }`\n\n  - `data: string`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst order = await client.order.create({\n  addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  variants: { var_XXXXXXXXXXXXXXXXXXXXXXXXX: 1 },\n});\n\nconsole.log(order);\n```",
  },
  {
    name: 'list',
    endpoint: '/order',
    httpMethod: 'get',
    summary: 'List orders',
    description: 'List the orders associated with the current user.',
    stainlessPath: '(resource) order > (method) list',
    qualified: 'client.order.list',
    response:
      '{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }[]; }',
    markdown:
      "## list\n\n`client.order.list(): { data: order[]; }`\n\n**get** `/order`\n\nList the orders associated with the current user.\n\n### Returns\n\n- `{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }[]; }`\n\n  - `data: { id: string; amount: { shipping: number; subtotal: number; }; created: string; items: { id: string; amount: number; quantity: number; description?: string; productVariantID?: string; }[]; shipping: { city: string; country: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; tracking: { number?: string; service?: string; status?: 'PRE_TRANSIT' | 'TRANSIT' | 'DELIVERED' | 'RETURNED' | 'FAILURE' | 'UNKNOWN'; statusDetails?: string; statusUpdatedAt?: string; url?: string; }; index?: number; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst orders = await client.order.list();\n\nconsole.log(orders);\n```",
  },
  {
    name: 'get',
    endpoint: '/order/{id}',
    httpMethod: 'get',
    summary: 'Get order',
    description: 'Get the order with the given ID.',
    stainlessPath: '(resource) order > (method) get',
    qualified: 'client.order.get',
    params: ['id: string;'],
    response:
      '{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }; }',
    markdown:
      "## get\n\n`client.order.get(id: string): { data: order; }`\n\n**get** `/order/{id}`\n\nGet the order with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the order to get.\n\n### Returns\n\n- `{ data: { id: string; amount: object; created: string; items: object[]; shipping: object; tracking: object; index?: number; }; }`\n\n  - `data: { id: string; amount: { shipping: number; subtotal: number; }; created: string; items: { id: string; amount: number; quantity: number; description?: string; productVariantID?: string; }[]; shipping: { city: string; country: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; tracking: { number?: string; service?: string; status?: 'PRE_TRANSIT' | 'TRANSIT' | 'DELIVERED' | 'RETURNED' | 'FAILURE' | 'UNKNOWN'; statusDetails?: string; statusUpdatedAt?: string; url?: string; }; index?: number; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst order = await client.order.get('ord_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(order);\n```",
  },
  {
    name: 'create',
    endpoint: '/subscription',
    httpMethod: 'post',
    summary: 'Subscribe',
    description: 'Create a subscription for the current user.',
    stainlessPath: '(resource) subscription > (method) create',
    qualified: 'client.subscription.create',
    params: [
      'id: string;',
      'addressID: string;',
      'cardID: string;',
      'created: string;',
      'price: number;',
      'productVariantID: string;',
      'quantity: number;',
      'next?: string;',
      "schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; };",
    ],
    response: "{ data: 'ok'; }",
    markdown:
      "## create\n\n`client.subscription.create(id: string, addressID: string, cardID: string, created: string, price: number, productVariantID: string, quantity: number, next?: string, schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }): { data: 'ok'; }`\n\n**post** `/subscription`\n\nCreate a subscription for the current user.\n\n### Parameters\n\n- `id: string`\n  Unique object identifier.\nThe format and length of IDs may change over time.\n\n- `addressID: string`\n  ID of the shipping address used for the subscription.\n\n- `cardID: string`\n  ID of the card used for the subscription.\n\n- `created: string`\n  Date the subscription was created.\n\n- `price: number`\n  Price of the subscription in cents (USD).\n\n- `productVariantID: string`\n  ID of the product variant being subscribed to.\n\n- `quantity: number`\n  Quantity of the subscription.\n\n- `next?: string`\n  Next shipment and billing date for the subscription.\n\n- `schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }`\n  Schedule of the subscription.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst subscription = await client.subscription.create({\n  id: 'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  created: '2024-06-29T19:36:19.000Z',\n  price: 2200,\n  productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',\n  quantity: 1,\n});\n\nconsole.log(subscription);\n```",
  },
  {
    name: 'update',
    endpoint: '/subscription/{id}',
    httpMethod: 'put',
    summary: 'Update subscription',
    description: 'Update card, address, or interval for an existing subscription.',
    stainlessPath: '(resource) subscription > (method) update',
    qualified: 'client.subscription.update',
    params: [
      'id: string;',
      'addressID?: string;',
      'cardID?: string;',
      "schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; };",
    ],
    response:
      '{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }; }',
    markdown:
      "## update\n\n`client.subscription.update(id: string, addressID?: string, cardID?: string, schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }): { data: subscription; }`\n\n**put** `/subscription/{id}`\n\nUpdate card, address, or interval for an existing subscription.\n\n### Parameters\n\n- `id: string`\n  ID of the subscription to update.\n\n- `addressID?: string`\n  New shipping address ID for the subscription.\n\n- `cardID?: string`\n  New payment method ID for the subscription.\n\n- `schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }`\n  New schedule for the subscription.\n\n### Returns\n\n- `{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }; }`\n\n  - `data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst subscription = await client.subscription.update('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(subscription);\n```",
  },
  {
    name: 'list',
    endpoint: '/subscription',
    httpMethod: 'get',
    summary: 'List subscriptions',
    description: 'List the subscriptions associated with the current user.',
    stainlessPath: '(resource) subscription > (method) list',
    qualified: 'client.subscription.list',
    response:
      '{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }[]; }',
    markdown:
      "## list\n\n`client.subscription.list(): { data: subscription[]; }`\n\n**get** `/subscription`\n\nList the subscriptions associated with the current user.\n\n### Returns\n\n- `{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }[]; }`\n\n  - `data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst subscriptions = await client.subscription.list();\n\nconsole.log(subscriptions);\n```",
  },
  {
    name: 'delete',
    endpoint: '/subscription/{id}',
    httpMethod: 'delete',
    summary: 'Cancel',
    description: 'Cancel a subscription for the current user.',
    stainlessPath: '(resource) subscription > (method) delete',
    qualified: 'client.subscription.delete',
    params: ['id: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## delete\n\n`client.subscription.delete(id: string): { data: 'ok'; }`\n\n**delete** `/subscription/{id}`\n\nCancel a subscription for the current user.\n\n### Parameters\n\n- `id: string`\n  ID of the subscription to cancel.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst subscription = await client.subscription.delete('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(subscription);\n```",
  },
  {
    name: 'get',
    endpoint: '/subscription/{id}',
    httpMethod: 'get',
    summary: 'Get subscription',
    description: 'Get the subscription with the given ID.',
    stainlessPath: '(resource) subscription > (method) get',
    qualified: 'client.subscription.get',
    params: ['id: string;'],
    response:
      '{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }; }',
    markdown:
      "## get\n\n`client.subscription.get(id: string): { data: subscription; }`\n\n**get** `/subscription/{id}`\n\nGet the subscription with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the subscription to get.\n\n### Returns\n\n- `{ data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: object | object; }; }`\n\n  - `data: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst subscription = await client.subscription.get('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(subscription);\n```",
  },
  {
    name: 'create',
    endpoint: '/token',
    httpMethod: 'post',
    summary: 'Create token',
    description: 'Create a personal access token.',
    stainlessPath: '(resource) token > (method) create',
    qualified: 'client.token.create',
    response: '{ data: { id: string; token: string; }; }',
    markdown:
      "## create\n\n`client.token.create(): { data: object; }`\n\n**post** `/token`\n\nCreate a personal access token.\n\n### Returns\n\n- `{ data: { id: string; token: string; }; }`\n\n  - `data: { id: string; token: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst token = await client.token.create();\n\nconsole.log(token);\n```",
  },
  {
    name: 'list',
    endpoint: '/token',
    httpMethod: 'get',
    summary: 'List tokens',
    description: "List the current user's personal access tokens.",
    stainlessPath: '(resource) token > (method) list',
    qualified: 'client.token.list',
    response: '{ data: { id: string; token: string; created: string; }[]; }',
    markdown:
      "## list\n\n`client.token.list(): { data: token[]; }`\n\n**get** `/token`\n\nList the current user's personal access tokens.\n\n### Returns\n\n- `{ data: { id: string; token: string; created: string; }[]; }`\n\n  - `data: { id: string; token: string; created: string; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst tokens = await client.token.list();\n\nconsole.log(tokens);\n```",
  },
  {
    name: 'delete',
    endpoint: '/token/{id}',
    httpMethod: 'delete',
    summary: 'Delete token',
    description: 'Delete the personal access token with the given ID.',
    stainlessPath: '(resource) token > (method) delete',
    qualified: 'client.token.delete',
    params: ['id: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## delete\n\n`client.token.delete(id: string): { data: 'ok'; }`\n\n**delete** `/token/{id}`\n\nDelete the personal access token with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the personal token to delete.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst token = await client.token.delete('pat_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(token);\n```",
  },
  {
    name: 'get',
    endpoint: '/token/{id}',
    httpMethod: 'get',
    summary: 'Get token',
    description: 'Get the personal access token with the given ID.',
    stainlessPath: '(resource) token > (method) get',
    qualified: 'client.token.get',
    params: ['id: string;'],
    response: '{ data: { id: string; token: string; created: string; }; }',
    markdown:
      "## get\n\n`client.token.get(id: string): { data: token; }`\n\n**get** `/token/{id}`\n\nGet the personal access token with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the personal token to get.\n\n### Returns\n\n- `{ data: { id: string; token: string; created: string; }; }`\n\n  - `data: { id: string; token: string; created: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst token = await client.token.get('pat_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(token);\n```",
  },
  {
    name: 'create',
    endpoint: '/app',
    httpMethod: 'post',
    summary: 'Create app',
    description: 'Create an app.',
    stainlessPath: '(resource) app > (method) create',
    qualified: 'client.app.create',
    params: ['name: string;', 'redirectURI: string;'],
    response: '{ data: { id: string; secret: string; }; }',
    markdown:
      "## create\n\n`client.app.create(name: string, redirectURI: string): { data: object; }`\n\n**post** `/app`\n\nCreate an app.\n\n### Parameters\n\n- `name: string`\n\n- `redirectURI: string`\n\n### Returns\n\n- `{ data: { id: string; secret: string; }; }`\n\n  - `data: { id: string; secret: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst app = await client.app.create({ name: 'Example App', redirectURI: 'https://example.com/callback' });\n\nconsole.log(app);\n```",
  },
  {
    name: 'list',
    endpoint: '/app',
    httpMethod: 'get',
    summary: 'List apps',
    description: "List the current user's registered apps.",
    stainlessPath: '(resource) app > (method) list',
    qualified: 'client.app.list',
    response: '{ data: { id: string; name: string; redirectURI: string; secret: string; }[]; }',
    markdown:
      "## list\n\n`client.app.list(): { data: app[]; }`\n\n**get** `/app`\n\nList the current user's registered apps.\n\n### Returns\n\n- `{ data: { id: string; name: string; redirectURI: string; secret: string; }[]; }`\n\n  - `data: { id: string; name: string; redirectURI: string; secret: string; }[]`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst apps = await client.app.list();\n\nconsole.log(apps);\n```",
  },
  {
    name: 'delete',
    endpoint: '/app/{id}',
    httpMethod: 'delete',
    summary: 'Delete app',
    description: 'Delete the app with the given ID.',
    stainlessPath: '(resource) app > (method) delete',
    qualified: 'client.app.delete',
    params: ['id: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## delete\n\n`client.app.delete(id: string): { data: 'ok'; }`\n\n**delete** `/app/{id}`\n\nDelete the app with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the app to delete.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst app = await client.app.delete('cli_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(app);\n```",
  },
  {
    name: 'get',
    endpoint: '/app/{id}',
    httpMethod: 'get',
    summary: 'Get app',
    description: 'Get the app with the given ID.',
    stainlessPath: '(resource) app > (method) get',
    qualified: 'client.app.get',
    params: ['id: string;'],
    response: '{ data: { id: string; name: string; redirectURI: string; secret: string; }; }',
    markdown:
      "## get\n\n`client.app.get(id: string): { data: app; }`\n\n**get** `/app/{id}`\n\nGet the app with the given ID.\n\n### Parameters\n\n- `id: string`\n  ID of the app to get.\n\n### Returns\n\n- `{ data: { id: string; name: string; redirectURI: string; secret: string; }; }`\n\n  - `data: { id: string; name: string; redirectURI: string; secret: string; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst app = await client.app.get('cli_XXXXXXXXXXXXXXXXXXXXXXXXX');\n\nconsole.log(app);\n```",
  },
  {
    name: 'create',
    endpoint: '/email',
    httpMethod: 'post',
    summary: 'Subscribe email',
    description: 'Subscribe to email updates from Terminal.',
    stainlessPath: '(resource) email > (method) create',
    qualified: 'client.email.create',
    params: ['email: string;'],
    response: "{ data: 'ok'; }",
    markdown:
      "## create\n\n`client.email.create(email: string): { data: 'ok'; }`\n\n**post** `/email`\n\nSubscribe to email updates from Terminal.\n\n### Parameters\n\n- `email: string`\n  Email address to subscribe to Terminal updates with.\n\n### Returns\n\n- `{ data: 'ok'; }`\n\n  - `data: 'ok'`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst email = await client.email.create({ email: 'john@example.com' });\n\nconsole.log(email);\n```",
  },
  {
    name: 'init',
    endpoint: '/view/init',
    httpMethod: 'get',
    summary: 'Get app data',
    description:
      'Get initial app data, including user, products, cart, addresses, cards, subscriptions, and orders.',
    stainlessPath: '(resource) view > (method) init',
    qualified: 'client.view.init',
    response:
      "{ data: { addresses: object[]; apps: object[]; cards: object[]; cart: object; orders: object[]; products: object[]; profile: object; region: 'eu' | 'na' | 'global'; subscriptions: object[]; tokens: object[]; }; }",
    markdown:
      "## init\n\n`client.view.init(): { data: object; }`\n\n**get** `/view/init`\n\nGet initial app data, including user, products, cart, addresses, cards, subscriptions, and orders.\n\n### Returns\n\n- `{ data: { addresses: object[]; apps: object[]; cards: object[]; cart: object; orders: object[]; products: object[]; profile: object; region: 'eu' | 'na' | 'global'; subscriptions: object[]; tokens: object[]; }; }`\n\n  - `data: { addresses: { id: string; city: string; country: string; created: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }[]; apps: { id: string; name: string; redirectURI: string; secret: string; }[]; cards: { id: string; brand: string; created: string; expiration: { month: number; year: number; }; last4: string; }[]; cart: { amount: { subtotal: number; shipping?: number; total?: number; }; items: { id: string; productVariantID: string; quantity: number; subtotal: number; }[]; subtotal: number; addressID?: string; cardID?: string; shipping?: { service?: string; timeframe?: string; }; }; orders: { id: string; amount: { shipping: number; subtotal: number; }; created: string; items: { id: string; amount: number; quantity: number; description?: string; productVariantID?: string; }[]; shipping: { city: string; country: string; name: string; street1: string; zip: string; phone?: string; province?: string; street2?: string; }; tracking: { number?: string; service?: string; status?: 'PRE_TRANSIT' | 'TRANSIT' | 'DELIVERED' | 'RETURNED' | 'FAILURE' | 'UNKNOWN'; statusDetails?: string; statusUpdatedAt?: string; url?: string; }; index?: number; }[]; products: { id: string; description: string; name: string; variants: object[]; order?: number; subscription?: 'allowed' | 'required'; tags?: { app?: string; color?: string; featured?: boolean; market_eu?: boolean; market_global?: boolean; market_na?: boolean; }; timeHidden?: string; }[]; profile: { user: { id: string; email: string; fingerprint: string; name: string; stripeCustomerID: string; }; }; region: 'eu' | 'na' | 'global'; subscriptions: { id: string; addressID: string; cardID: string; created: string; price: number; productVariantID: string; quantity: number; next?: string; schedule?: { type: 'fixed'; } | { interval: number; type: 'weekly'; }; }[]; tokens: { id: string; token: string; created: string; }[]; }`\n\n### Example\n\n```typescript\nimport Terminal from '@terminaldotshop/sdk';\n\nconst client = new Terminal();\n\nconst response = await client.view.init();\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
