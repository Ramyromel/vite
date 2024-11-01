# Preview Options

Unless noted, the options in this section are only applied to preview.

## preview.host

- **Type:** `string | boolean`
- **Default:** [`server.host`](./server-options#server-host)

Specify which IP addresses the server should listen on.
Set this to `0.0.0.0` or `true` to listen on all addresses, including LAN and public addresses.

This can be set via the CLI using `--host 0.0.0.0` or `--host`.

::: tip NOTE

There are cases when other servers might respond instead of Vite.
See [`server.host`](./server-options#server-host) for more details.

:::

**Example:**

```js
export default defineConfig({
  preview: {
    host: '0.0.0.0',
  },
})
```

## preview.port

- **Type:** `number`
- **Default:** `4173`

Specify server port. Note if the port is already being used, Vite will automatically try the next available port so this may not be the actual port the server ends up listening on.

**Example:**

```js
export default defineConfig({
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
})
```

## preview.strictPort

- **Type:** `boolean`
- **Default:** [`server.strictPort`](./server-options#server-strictport)

Set to `true` to exit if port is already in use, instead of automatically trying the next available port.

**Example:**

```js
export default defineConfig({
  preview: {
    strictPort: true,
  },
})
```

## preview.https

- **Type:** `https.ServerOptions`
- **Default:** [`server.https`](./server-options#server-https)

Enable TLS + HTTP/2. Note this downgrades to TLS only when the [`server.proxy` option](./server-options#server-proxy) is also used.

The value can also be an [options object](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener) passed to `https.createServer()`.

**Example:**

```js
export default defineConfig({
  preview: {
    https: {
      key: fs.readFileSync('./path/to/server-key.pem'),
      cert: fs.readFileSync('./path/to/server-cert.pem'),
    },
  },
})
```

## preview.open

- **Type:** `boolean | string`
- **Default:** [`server.open`](./server-options#server-open)

Automatically open the app in the browser on server start. When the value is a string, it will be used as the URL's pathname. If you want to open the server in a specific browser you like, you can set the env `process.env.BROWSER` (e.g. `firefox`). You can also set `process.env.BROWSER_ARGS` to pass additional arguments (e.g. `--incognito`).

`BROWSER` and `BROWSER_ARGS` are also special environment variables you can set in the `.env` file to configure it. See [the `open` package](https://github.com/sindresorhus/open#app) for more details.

**Example:**

```js
export default defineConfig({
  preview: {
    open: '/docs/index.html',
  },
})
```

## preview.proxy

- **Type:** `Record<string, string | ProxyOptions>`
- **Default:** [`server.proxy`](./server-options#server-proxy)

Configure custom proxy rules for the preview server. Expects an object of `{ key: options }` pairs. If the key starts with `^`, it will be interpreted as a `RegExp`. The `configure` option can be used to access the proxy instance.

Uses [`http-proxy`](https://github.com/http-party/node-http-proxy). Full options [here](https://github.com/http-party/node-http-proxy#options).

**Example:**

```js
export default defineConfig({
  preview: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

## preview.cors

- **Type:** `boolean | CorsOptions`
- **Default:** [`server.cors`](./server-options#server-cors)

Configure CORS for the preview server. This is enabled by default and allows any origin. Pass an [options object](https://github.com/expressjs/cors#configuration-options) to fine tune the behavior or `false` to disable.

**Example:**

```js
export default defineConfig({
  preview: {
    cors: {
      origin: 'https://example.com',
      methods: ['GET', 'POST'],
    },
  },
})
```

## preview.headers

- **Type:** `OutgoingHttpHeaders`

Specify server response headers.

**Example:**

```js
export default defineConfig({
  preview: {
    headers: {
      'X-Custom-Header': 'value',
    },
  },
})
```

## Troubleshooting

### Common Issues

1. **Preview Server Not Starting**: Ensure that the specified port is not already in use. If the port is in use, Vite will automatically try the next available port unless `preview.strictPort` is set to `true`.

2. **HTTPS Not Working**: Ensure that you have provided valid certificate files for the `preview.https` option. If you are using a self-signed certificate, you may need to add it to your browser's trusted certificates.

3. **CORS Issues**: If you encounter CORS issues, ensure that the `preview.cors` option is configured correctly. You can pass an options object to fine-tune the behavior or set it to `false` to disable CORS.

### Further Assistance

If you encounter any issues not covered in this section, please refer to the [Vite documentation](https://vitejs.dev) or seek help from the Vite community on [Discord](https://chat.vite.dev).
