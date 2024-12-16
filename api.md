# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductVariant</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>() -> ProductListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserInitResponse</a></code>
- <code><a href="./src/resources/users.ts">UserMeResponse</a></code>

Methods:

- <code title="put /users/me">client.users.<a href="./src/resources/users.ts">update</a>({ ...params }) -> UserUpdateResponse</code>
- <code title="get /users/init">client.users.<a href="./src/resources/users.ts">init</a>() -> UserInitResponse</code>
- <code title="get /users/me">client.users.<a href="./src/resources/users.ts">me</a>() -> UserMeResponse</code>

# Addresses

Types:

- <code><a href="./src/resources/addresses.ts">Address</a></code>
- <code><a href="./src/resources/addresses.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/addresses.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /addresses">client.addresses.<a href="./src/resources/addresses.ts">create</a>({ ...params }) -> AddressCreateResponse</code>
- <code title="get /addresses">client.addresses.<a href="./src/resources/addresses.ts">list</a>() -> AddressListResponse</code>
- <code title="delete /addresses/{id}">client.addresses.<a href="./src/resources/addresses.ts">delete</a>(id) -> AddressDeleteResponse</code>

# Cards

Types:

- <code><a href="./src/resources/cards.ts">Card</a></code>
- <code><a href="./src/resources/cards.ts">CardCreateResponse</a></code>
- <code><a href="./src/resources/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/cards.ts">CardDeleteResponse</a></code>

Methods:

- <code title="post /cards">client.cards.<a href="./src/resources/cards.ts">create</a>({ ...params }) -> CardCreateResponse</code>
- <code title="get /cards">client.cards.<a href="./src/resources/cards.ts">list</a>() -> CardListResponse</code>
- <code title="delete /cards/{id}">client.cards.<a href="./src/resources/cards.ts">delete</a>(id) -> CardDeleteResponse</code>

# Cart

Types:

- <code><a href="./src/resources/cart.ts">Cart</a></code>
- <code><a href="./src/resources/cart.ts">CartListResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetAddressResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetCardResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetItemResponse</a></code>

Methods:

- <code title="get /cart">client.cart.<a href="./src/resources/cart.ts">list</a>() -> CartListResponse</code>
- <code title="put /cart/address">client.cart.<a href="./src/resources/cart.ts">setAddress</a>({ ...params }) -> CartSetAddressResponse</code>
- <code title="put /cart/card">client.cart.<a href="./src/resources/cart.ts">setCard</a>({ ...params }) -> CartSetCardResponse</code>
- <code title="put /cart/item">client.cart.<a href="./src/resources/cart.ts">setItem</a>({ ...params }) -> CartSetItemResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">Order</a></code>
- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderGetResponse</a></code>

Methods:

- <code title="post /orders">client.orders.<a href="./src/resources/orders.ts">create</a>() -> OrderCreateResponse</code>
- <code title="get /orders">client.orders.<a href="./src/resources/orders.ts">list</a>() -> OrderListResponse</code>
- <code title="get /orders/{id}">client.orders.<a href="./src/resources/orders.ts">get</a>(id) -> OrderGetResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="put /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>() -> SubscriptionListResponse</code>
- <code title="delete /subscriptions/{id}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>

# Emails

Types:

- <code><a href="./src/resources/emails.ts">EmailCreateResponse</a></code>

Methods:

- <code title="post /emails">client.emails.<a href="./src/resources/emails.ts">create</a>({ ...params }) -> EmailCreateResponse</code>
