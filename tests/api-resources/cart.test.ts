// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminal/sdk';
import { Response } from 'node-fetch';

const client = new Terminal({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cart', () => {
  test('list', async () => {
    const responsePromise = client.cart.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.cart.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });

  test('setCard: only required params', async () => {
    const responsePromise = client.cart.setCard({ cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setCard: required and optional params', async () => {
    const response = await client.cart.setCard({ cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX' });
  });

  test('setItem: only required params', async () => {
    const responsePromise = client.cart.setItem({
      productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',
      quantity: 2,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setItem: required and optional params', async () => {
    const response = await client.cart.setItem({
      productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',
      quantity: 2,
    });
  });

  test('setShipping: only required params', async () => {
    const responsePromise = client.cart.setShipping({ shippingID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setShipping: required and optional params', async () => {
    const response = await client.cart.setShipping({ shippingID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX' });
  });
});
