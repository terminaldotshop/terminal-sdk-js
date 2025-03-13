# Product

Types:

- <code><a href="./src/resources/product.ts">Product</a></code>
- <code><a href="./src/resources/product.ts">ProductVariant</a></code>
- <code><a href="./src/resources/product.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/product.ts">ProductGetResponse</a></code>

Methods:

- <code title="get /product">client.product.<a href="./src/resources/product.ts">list</a>() -> ProductListResponse</code>
- <code title="get /product/{id}">client.product.<a href="./src/resources/product.ts">get</a>(id) -> ProductGetResponse</code>

# Profile

Types:

- <code><a href="./src/resources/profile.ts">Profile</a></code>
- <code><a href="./src/resources/profile.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/profile.ts">ProfileMeResponse</a></code>

Methods:

- <code title="put /profile">client.profile.<a href="./src/resources/profile.ts">update</a>({ ...params }) -> ProfileUpdateResponse</code>
- <code title="get /profile">client.profile.<a href="./src/resources/profile.ts">me</a>() -> ProfileMeResponse</code>

# Address

Types:

- <code><a href="./src/resources/address.ts">Address</a></code>
- <code><a href="./src/resources/address.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/address.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/address.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/address.ts">AddressGetResponse</a></code>

Methods:

- <code title="post /address">client.address.<a href="./src/resources/address.ts">create</a>({ ...params }) -> AddressCreateResponse</code>
- <code title="get /address">client.address.<a href="./src/resources/address.ts">list</a>() -> AddressListResponse</code>
- <code title="delete /address/{id}">client.address.<a href="./src/resources/address.ts">delete</a>(id) -> AddressDeleteResponse</code>
- <code title="get /address/{id}">client.address.<a href="./src/resources/address.ts">get</a>(id) -> AddressGetResponse</code>

# Card

Types:

- <code><a href="./src/resources/card.ts">Card</a></code>
- <code><a href="./src/resources/card.ts">CardCreateResponse</a></code>
- <code><a href="./src/resources/card.ts">CardListResponse</a></code>
- <code><a href="./src/resources/card.ts">CardDeleteResponse</a></code>
- <code><a href="./src/resources/card.ts">CardCollectResponse</a></code>
- <code><a href="./src/resources/card.ts">CardGetResponse</a></code>

Methods:

- <code title="post /card">client.card.<a href="./src/resources/card.ts">create</a>({ ...params }) -> CardCreateResponse</code>
- <code title="get /card">client.card.<a href="./src/resources/card.ts">list</a>() -> CardListResponse</code>
- <code title="delete /card/{id}">client.card.<a href="./src/resources/card.ts">delete</a>(id) -> CardDeleteResponse</code>
- <code title="post /card/collect">client.card.<a href="./src/resources/card.ts">collect</a>() -> CardCollectResponse</code>
- <code title="get /card/{id}">client.card.<a href="./src/resources/card.ts">get</a>(id) -> CardGetResponse</code>

# Cart

Types:

- <code><a href="./src/resources/cart.ts">Cart</a></code>
- <code><a href="./src/resources/cart.ts">CartClearResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartConvertResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartGetResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetAddressResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetCardResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetItemResponse</a></code>

Methods:

- <code title="delete /cart">client.cart.<a href="./src/resources/cart.ts">clear</a>() -> CartClearResponse</code>
- <code title="post /cart/convert">client.cart.<a href="./src/resources/cart.ts">convert</a>() -> CartConvertResponse</code>
- <code title="get /cart">client.cart.<a href="./src/resources/cart.ts">get</a>() -> CartGetResponse</code>
- <code title="put /cart/address">client.cart.<a href="./src/resources/cart.ts">setAddress</a>({ ...params }) -> CartSetAddressResponse</code>
- <code title="put /cart/card">client.cart.<a href="./src/resources/cart.ts">setCard</a>({ ...params }) -> CartSetCardResponse</code>
- <code title="put /cart/item">client.cart.<a href="./src/resources/cart.ts">setItem</a>({ ...params }) -> CartSetItemResponse</code>

# Order

Types:

- <code><a href="./src/resources/order.ts">Order</a></code>
- <code><a href="./src/resources/order.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderListResponse</a></code>
- <code><a href="./src/resources/order.ts">OrderGetResponse</a></code>

Methods:

- <code title="post /order">client.order.<a href="./src/resources/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /order">client.order.<a href="./src/resources/order.ts">list</a>() -> OrderListResponse</code>
- <code title="get /order/{id}">client.order.<a href="./src/resources/order.ts">get</a>(id) -> OrderGetResponse</code>

# Subscription

Types:

- <code><a href="./src/resources/subscription.ts">Subscription</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/subscription.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /subscription">client.subscription.<a href="./src/resources/subscription.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /subscription">client.subscription.<a href="./src/resources/subscription.ts">list</a>() -> SubscriptionListResponse</code>
- <code title="delete /subscription/{id}">client.subscription.<a href="./src/resources/subscription.ts">delete</a>(id) -> SubscriptionDeleteResponse</code>
- <code title="get /subscription/{id}">client.subscription.<a href="./src/resources/subscription.ts">get</a>(id) -> SubscriptionGetResponse</code>

# Token

Types:

- <code><a href="./src/resources/token.ts">Token</a></code>
- <code><a href="./src/resources/token.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/token.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/token.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="post /token">client.token.<a href="./src/resources/token.ts">create</a>() -> TokenCreateResponse</code>
- <code title="get /token">client.token.<a href="./src/resources/token.ts">list</a>() -> TokenListResponse</code>
- <code title="delete /token/{id}">client.token.<a href="./src/resources/token.ts">delete</a>(id) -> TokenDeleteResponse</code>
- <code title="get /token/{id}">client.token.<a href="./src/resources/token.ts">get</a>(id) -> TokenGetResponse</code>

# App

Types:

- <code><a href="./src/resources/app.ts">App</a></code>
- <code><a href="./src/resources/app.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/app.ts">AppListResponse</a></code>
- <code><a href="./src/resources/app.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/app.ts">AppGetResponse</a></code>

Methods:

- <code title="post /app">client.app.<a href="./src/resources/app.ts">create</a>({ ...params }) -> AppCreateResponse</code>
- <code title="get /app">client.app.<a href="./src/resources/app.ts">list</a>() -> AppListResponse</code>
- <code title="delete /app/{id}">client.app.<a href="./src/resources/app.ts">delete</a>(id) -> AppDeleteResponse</code>
- <code title="get /app/{id}">client.app.<a href="./src/resources/app.ts">get</a>(id) -> AppGetResponse</code>

# Email

Types:

- <code><a href="./src/resources/email.ts">EmailCreateResponse</a></code>

Methods:

- <code title="post /email">client.email.<a href="./src/resources/email.ts">create</a>({ ...params }) -> EmailCreateResponse</code>

# View

Types:

- <code><a href="./src/resources/view.ts">Region</a></code>
- <code><a href="./src/resources/view.ts">ViewInitResponse</a></code>

Methods:

- <code title="get /view/init">client.view.<a href="./src/resources/view.ts">init</a>() -> ViewInitResponse</code>
