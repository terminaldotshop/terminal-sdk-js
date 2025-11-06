# Terminal Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export TERMINAL_BEARER_TOKEN="My Bearer Token"
export TERMINAL_APP_ID="My App ID"
export TERMINAL_ENVIRONMENT="production"
npx -y @terminaldotshop/mcp@latest
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
      "args": ["-y", "@terminaldotshop/mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "TERMINAL_BEARER_TOKEN": "My Bearer Token",
        "TERMINAL_APP_ID": "My App ID",
        "TERMINAL_ENVIRONMENT": "production"
      }
    }
  }
}
```

### Cursor

      If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
      in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

      [![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=@terminaldotshop/mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkB0ZXJtaW5hbGRvdHNob3AvbWNwIl0sImVudiI6eyJURVJNSU5BTF9CRUFSRVJfVE9LRU4iOiJTZXQgeW91ciBURVJNSU5BTF9CRUFSRVJfVE9LRU4gaGVyZS4iLCJURVJNSU5BTF9BUFBfSUQiOiJTZXQgeW91ciBURVJNSU5BTF9BUFBfSUQgaGVyZS4ifX0)

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------- | ------------------------ | --------------- |
| `x-terminal-bearer-token` | `bearerToken` | Bearer |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "terminaldotshop_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

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
- `set_address_cart` (`write`): Set the shipping address for the current user's cart.
- `set_card_cart` (`write`): Set the credit card for the current user's cart.
- `set_item_cart` (`write`): Add an item to the current user's cart.

### Resource `order`:

- `create_order` (`write`): Create an order without a cart. The order will be placed immediately.
- `list_order` (`read`): List the orders associated with the current user.
- `get_order` (`read`): Get the order with the given ID.

### Resource `subscription`:

- `create_subscription` (`write`): Create a subscription for the current user.
- `update_subscription` (`write`): Update card, address, or interval for an existing subscription.
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
