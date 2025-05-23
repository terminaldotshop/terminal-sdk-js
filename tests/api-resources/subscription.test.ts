// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminaldotshop/sdk';
import { Response } from 'node-fetch';

const client = new Terminal({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscription', () => {
  test('create: only required params', async () => {
    const responsePromise = client.subscription.create({
      id: 'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
      addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',
      cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',
      created: '2024-06-29T19:36:19.000Z',
      price: 2200,
      productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',
      quantity: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.subscription.create({
      id: 'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
      addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',
      cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',
      created: '2024-06-29T19:36:19.000Z',
      price: 2200,
      productVariantID: 'var_XXXXXXXXXXXXXXXXXXXXXXXXX',
      quantity: 1,
      next: '2025-02-01T19:36:19.000Z',
      schedule: { interval: 3, type: 'weekly' },
    });
  });

  test('update', async () => {
    const responsePromise = client.subscription.update('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscription.update('sub_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Terminal.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscription.update(
        'sub_XXXXXXXXXXXXXXXXXXXXXXXXX',
        {
          addressID: 'shp_XXXXXXXXXXXXXXXXXXXXXXXXX',
          cardID: 'crd_XXXXXXXXXXXXXXXXXXXXXXXXX',
          schedule: { interval: 3, type: 'weekly' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Terminal.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.subscription.list();
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
    await expect(client.subscription.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.subscription.delete('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscription.delete('sub_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Terminal.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.subscription.get('sub_XXXXXXXXXXXXXXXXXXXXXXXXX');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.subscription.get('sub_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Terminal.NotFoundError);
  });
});
