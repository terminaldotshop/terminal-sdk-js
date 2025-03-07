// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminaldotshop/sdk';
import { Response } from 'node-fetch';

const client = new Terminal({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource profile', () => {
  test('update: only required params', async () => {
    const responsePromise = client.profile.update({ email: 'john@example.com', name: 'John Doe' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.profile.update({ email: 'john@example.com', name: 'John Doe' });
  });

  test('me', async () => {
    const responsePromise = client.profile.me();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('me: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.profile.me({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });
});
