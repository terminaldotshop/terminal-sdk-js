// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminaldotshop/sdk';
import { Response } from 'node-fetch';

const client = new Terminal({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource card', () => {
  test('create: only required params', async () => {
    const responsePromise = client.card.create({ token: 'tok_1N3T00LkdIwHu7ixt44h1F8k' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.card.create({ token: 'tok_1N3T00LkdIwHu7ixt44h1F8k' });
  });

  test('list', async () => {
    const responsePromise = client.card.list();
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
    await expect(client.card.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.card.delete('crd_XXXXXXXXXXXXXXXXXXXXXXXXX');
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
      client.card.delete('crd_XXXXXXXXXXXXXXXXXXXXXXXXX', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Terminal.NotFoundError);
  });
});
