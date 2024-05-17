# Product

Types:

- <code><a href="./src/resources/product.ts">ProductListResponse</a></code>

Methods:

- <code title="get /product">client.product.<a href="./src/resources/product.ts">list</a>() -> ProductListResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserMeResponse</a></code>

Methods:

- <code title="get /user/me">client.user.<a href="./src/resources/user/user.ts">me</a>() -> UserMeResponse</code>

## Shipping

Types:

- <code><a href="./src/resources/user/shipping.ts">ShippingCreateResponse</a></code>
- <code><a href="./src/resources/user/shipping.ts">ShippingListResponse</a></code>
- <code><a href="./src/resources/user/shipping.ts">ShippingDeleteResponse</a></code>

Methods:

- <code title="post /user/shipping">client.user.shipping.<a href="./src/resources/user/shipping.ts">create</a>({ ...params }) -> ShippingCreateResponse</code>
- <code title="get /user/shipping">client.user.shipping.<a href="./src/resources/user/shipping.ts">list</a>() -> ShippingListResponse</code>
- <code title="delete /user/shipping/{id}">client.user.shipping.<a href="./src/resources/user/shipping.ts">delete</a>(id, { ...params }) -> ShippingDeleteResponse</code>

# Cart

Types:

- <code><a href="./src/resources/cart.ts">CartListResponse</a></code>
- <code><a href="./src/resources/cart.ts">CartSetItemResponse</a></code>

Methods:

- <code title="get /cart">client.cart.<a href="./src/resources/cart.ts">list</a>() -> CartListResponse</code>
- <code title="put /cart">client.cart.<a href="./src/resources/cart.ts">setItem</a>({ ...params }) -> CartSetItemResponse</code>
