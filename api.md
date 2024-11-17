# Shared

Types:

- <code><a href="./src/resources/shared.ts">Address</a></code>
- <code><a href="./src/resources/shared.ts">Card</a></code>
- <code><a href="./src/resources/shared.ts">Cart</a></code>
- <code><a href="./src/resources/shared.ts">Order</a></code>
- <code><a href="./src/resources/shared.ts">Product</a></code>
- <code><a href="./src/resources/shared.ts">ProductVariant</a></code>
- <code><a href="./src/resources/shared.ts">Shipping</a></code>
- <code><a href="./src/resources/shared.ts">Subscription</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>

# Product

Types:

- <code><a href="./src/resources/product.ts">ProductListResponse</a></code>

Methods:

- <code title="get /product">client.product.<a href="./src/resources/product.ts">list</a>() -> ProductListResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserMeResponse</a></code>

Methods:

- <code title="put /user/me">client.user.<a href="./src/resources/user/user.ts">update</a>({ ...params }) -> UserUpdateResponse</code>
- <code title="get /user/me">client.user.<a href="./src/resources/user/user.ts">me</a>() -> UserMeResponse</code>

## Shipping

Types:

- <code><a href="./src/resources/user/shipping.ts">ShippingCreateResponse</a></code>
- <code><a href="./src/resources/user/shipping.ts">ShippingListResponse</a></code>
- <code><a href="./src/resources/user/shipping.ts">ShippingDeleteResponse</a></code>

Methods:

- <code title="post /user/shipping">client.user.shipping.<a href="./src/resources/user/shipping.ts">create</a>({ ...params }) -> ShippingCreateResponse</code>
- <code title="get /user/shipping">client.user.shipping.<a href="./src/resources/user/shipping.ts">list</a>() -> ShippingListResponse</code>
- <code title="delete /user/shipping/{id}">client.user.shipping.<a href="./src/resources/user/shipping.ts">delete</a>(id) -> ShippingDeleteResponse</code>

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
- <code><a href="./src/resources/cart.ts">CartSetCardResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetItemResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetShippingResponse</a></code>

Methods:

- <code title="get /cart">client.cart.<a href="./src/resources/cart.ts">list</a>() -> CartListResponse</code>
- <code title="put /cart/card">client.cart.<a href="./src/resources/cart.ts">setCard</a>({ ...params }) -> CartSetCardResponse</code>
- <code title="put /cart/item">client.cart.<a href="./src/resources/cart.ts">setItem</a>({ ...params }) -> CartSetItemResponse</code>
- <code title="put /cart/shipping">client.cart.<a href="./src/resources/cart.ts">setShipping</a>({ ...params }) -> CartSetShippingResponse</code>

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
