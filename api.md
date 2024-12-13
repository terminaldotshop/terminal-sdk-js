# Shared

Types:

- <code><a href="./src/resources/shared.ts">Address</a></code>
- <code><a href="./src/resources/shared.ts">Card</a></code>
- <code><a href="./src/resources/shared.ts">Cart</a></code>
- <code><a href="./src/resources/shared.ts">Order</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductVariant</a></code>
- <code><a href="./src/resources/shared.ts">Subscription</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>

# Product

Types:

- <code><a href="./src/resources/product.ts">ProductListResponse</a></code>

Methods:

- <code title="get /product">client.product.<a href="./src/resources/product.ts">list</a>() -> ProductListResponse</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/user.ts">UserInitResponse</a></code>
- <code><a href="./src/resources/user.ts">UserMeResponse</a></code>

Methods:

- <code title="put /user/me">client.user.<a href="./src/resources/user.ts">update</a>({ ...params }) -> UserUpdateResponse</code>
- <code title="get /user/init">client.user.<a href="./src/resources/user.ts">init</a>() -> UserInitResponse</code>
- <code title="get /user/me">client.user.<a href="./src/resources/user.ts">me</a>() -> UserMeResponse</code>

# Address

Types:

- <code><a href="./src/resources/address.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/address.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/address.ts">AddressDeleteResponse</a></code>

Methods:

- <code title="post /address">client.address.<a href="./src/resources/address.ts">create</a>({ ...params }) -> AddressCreateResponse</code>
- <code title="get /address">client.address.<a href="./src/resources/address.ts">list</a>() -> AddressListResponse</code>
- <code title="delete /address/{id}">client.address.<a href="./src/resources/address.ts">delete</a>(id) -> AddressDeleteResponse</code>

# Card

Types:

- <code><a href="./src/resources/card.ts">CardCreateResponse</a></code>
- <code><a href="./src/resources/card.ts">CardListResponse</a></code>
- <code><a href="./src/resources/card.ts">CardDeleteResponse</a></code>

Methods:

- <code title="post /card">client.card.<a href="./src/resources/card.ts">create</a>({ ...params }) -> CardCreateResponse</code>
- <code title="get /card">client.card.<a href="./src/resources/card.ts">list</a>() -> CardListResponse</code>
- <code title="delete /card/{id}">client.card.<a href="./src/resources/card.ts">delete</a>(id) -> CardDeleteResponse</code>

# Cart

Types:

- <code><a href="./src/resources/cart.ts">CartListResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetAddressResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetCardResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetItemResponse</a></code>

Methods:

- <code title="get /cart">client.cart.<a href="./src/resources/cart.ts">list</a>() -> CartListResponse</code>
- <code title="put /cart/address">client.cart.<a href="./src/resources/cart.ts">setAddress</a>({ ...params }) -> CartSetAddressResponse</code>
- <code title="put /cart/card">client.cart.<a href="./src/resources/cart.ts">setCard</a>({ ...params }) -> CartSetCardResponse</code>
- <code title="put /cart/item">client.cart.<a href="./src/resources/cart.ts">setItem</a>({ ...params }) -> CartSetItemResponse</code>

# Order

Types:

- <code><a href="./src/resources/order.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderGetResponse</a></code>

Methods:

- <code title="post /order">client.order.<a href="./src/resources/order.ts">create</a>() -> OrderCreateResponse</code>
- <code title="get /order">client.order.<a href="./src/resources/order.ts">list</a>() -> OrderListResponse</code>
- <code title="get /order/{id}">client.order.<a href="./src/resources/order.ts">get</a>(id) -> OrderGetResponse</code>

# Subscription

Types:

- <code><a href="./src/resources/subscription.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="put /subscription">client.subscription.<a href="./src/resources/subscription.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscription">client.subscription.<a href="./src/resources/subscription.ts">list</a>() -> SubscriptionListResponse</code>
- <code title="delete /subscription/{id}">client.subscription.<a href="./src/resources/subscription.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>

# Email

Types:

- <code><a href="./src/resources/email.ts">EmailCreateResponse</a></code>

Methods:

- <code title="post /email/subscription">client.email.<a href="./src/resources/email.ts">create</a>({ ...params }) -> EmailCreateResponse</code>
