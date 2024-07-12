// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Terminal from '@terminal/sdk';
import { Response } from 'node-fetch';

const terminal = new Terminal({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  test('create', async () => {
    const responsePromise = terminal.order.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(terminal.order.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = terminal.order.get('id');
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
    await expect(terminal.order.get('id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Terminal.NotFoundError,
    );
  });
});
