# Worker Options

Unless noted, the options in this section are applied to all dev, build, and preview.

## worker.format

- **Type:** `'es' | 'iife'`
- **Default:** `'iife'`

Output format for worker bundle.

**Example:**

```js
export default defineConfig({
  worker: {
    format: 'es',
  },
})
```

## worker.plugins

- **Type:** [`() => (Plugin | Plugin[])[]`](./shared-options#plugins)

Vite plugins that apply to the worker bundles. Note that [config.plugins](./shared-options#plugins) only applies to workers in dev, it should be configured here instead for build.
The function should return new plugin instances as they are used in parallel rollup worker builds. As such, modifying `config.worker` options in the `config` hook will be ignored.

**Example:**

```js
export default defineConfig({
  worker: {
    plugins: () => [myWorkerPlugin()],
  },
})
```

## worker.rollupOptions

- **Type:** [`RollupOptions`](https://rollupjs.org/configuration-options/)

Rollup options to build worker bundle.

**Example:**

```js
export default defineConfig({
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: 'worker-[name].js',
      },
    },
  },
})
```

## Troubleshooting

### Common Issues

1. **Worker Bundle Not Generated**: Ensure that the `worker.format` option is set correctly and that the necessary plugins are included in the `worker.plugins` option.

2. **Plugins Not Applied to Worker Bundles**: Ensure that the `worker.plugins` option is configured correctly and returns new plugin instances.

3. **Rollup Options Not Applied**: Ensure that the `worker.rollupOptions` option is configured correctly and includes the necessary Rollup options for the worker bundle.

### Further Assistance

If you encounter any issues not covered in this section, please refer to the [Vite documentation](https://vitejs.dev) or seek help from the Vite community on [Discord](https://chat.vite.dev).
