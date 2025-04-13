# Terminal Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TERMINAL_BEARER_TOKEN="My Bearer Token"
export TERMINAL_APP_ID="My App ID"
npx -y @terminaldotshop/mcp
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "terminaldotshop_sdk_api": {
      "command": "npx",
      "args": ["-y", "@terminaldotshop/mcp"],
      "env": {
        "TERMINAL_BEARER_TOKEN": "My Bearer Token",
        "TERMINAL_APP_ID": "My App ID"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@terminaldotshop/mcp/server";

// import a specific tool
import listProduct from "@terminaldotshop/mcp/tools/product/list-product";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listProduct, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `product`:

- `list_product` (`read`): List all products for sale in the Terminal shop.
- `get_product` (`read`): Get a product by ID from the Terminal shop.

### Resource `profile`:

- `update_profile` (`write`): Update the current user's profile.
- `me_profile` (`read`): Get the current user's profile.

### Resource `address`:

- `create_address` (`write`): Create and add a shipping address to the current user.
- `list_address` (`read`): Get the shipping addresses associated with the current user.
- `delete_address` (`write`): Delete a shipping address from the current user.
- `get_address` (`read`): Get the shipping address with the given ID.

### Resource `card`:

- `create_card` (`write`): Attach a credit card (tokenized via Stripe) to the current user.
- `list_card` (`read`): List the credit cards associated with the current user.
- `delete_card` (`write`): Delete a credit card associated with the current user.
- `collect_card` (`write`): Create a temporary URL for collecting credit card information for the current user.
- `get_card` (`read`): Get a credit card by ID associated with the current user.

### Resource `cart`:

- `clear_cart` (`write`): Clear the current user's cart.
- `convert_cart` (`write`): Convert the current user's cart to an order.
- `get_cart` (`read`): Get the current user's cart.
- `setAddress_cart` (`write`): Set the shipping address for the current user's cart.
- `setCard_cart` (`write`): Set the credit card for the current user's cart.
- `setItem_cart` (`write`): Add an item to the current user's cart.

### Resource `order`:

- `create_order` (`write`): Create an order without a cart. The order will be placed immediately.
- `list_order` (`read`): List the orders associated with the current user.
- `get_order` (`read`): Get the order with the given ID.

### Resource `subscription`:

- `create_subscription` (`write`): Create a subscription for the current user.
- `list_subscription` (`read`): List the subscriptions associated with the current user.
- `delete_subscription` (`write`): Cancel a subscription for the current user.
- `get_subscription` (`read`): Get the subscription with the given ID.

### Resource `token`:

- `create_token` (`write`): Create a personal access token.
- `list_token` (`read`): List the current user's personal access tokens.
- `delete_token` (`write`): Delete the personal access token with the given ID.
- `get_token` (`read`): Get the personal access token with the given ID.

### Resource `app`:

- `create_app` (`write`): Create an app.
- `list_app` (`read`): List the current user's registered apps.
- `delete_app` (`write`): Delete the app with the given ID.
- `get_app` (`read`): Get the app with the given ID.

### Resource `email`:

- `create_email` (`write`): Subscribe to email updates from Terminal.

### Resource `view`:

- `init_view` (`read`): Get initial app data, including user, products, cart, addresses, cards, subscriptions, and orders.
