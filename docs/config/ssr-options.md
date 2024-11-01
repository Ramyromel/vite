# SSR Options

Unless noted, the options in this section are applied to both dev and build.

## ssr.external

- **Type:** `string[] | true`
- **Related:** [SSR Externals](/guide/ssr#ssr-externals)

Externalize the given dependencies and their transitive dependencies for SSR. By default, all dependencies are externalized except for linked dependencies (for HMR). If you prefer to externalize the linked dependency, you can pass its name to this option.

If `true`, all dependencies including linked dependencies are externalized.

Note that the explicitly listed dependencies (using `string[]` type) will always take priority if they're also listed in `ssr.noExternal` (using any type).

**Example:**

```js
export default defineConfig({
  ssr: {
    external: ['react', 'react-dom'],
  },
})
```

## ssr.noExternal

- **Type:** `string | RegExp | (string | RegExp)[] | true`
- **Related:** [SSR Externals](/guide/ssr#ssr-externals)

Prevent listed dependencies from being externalized for SSR, which they will get bundled in build. By default, only linked dependencies are not externalized (for HMR). If you prefer to externalize the linked dependency, you can pass its name to the `ssr.external` option.

If `true`, no dependencies are externalized. However, dependencies explicitly listed in `ssr.external` (using `string[]` type) can take priority and still be externalized. If `ssr.target: 'node'` is set, Node.js built-ins will also be externalized by default.

Note that if both `ssr.noExternal: true` and `ssr.external: true` are configured, `ssr.noExternal` takes priority and no dependencies are externalized.

**Example:**

```js
export default defineConfig({
  ssr: {
    noExternal: ['my-library'],
  },
})
```

## ssr.target

- **Type:** `'node' | 'webworker'`
- **Default:** `node`

Build target for the SSR server.

**Example:**

```js
export default defineConfig({
  ssr: {
    target: 'webworker',
  },
})
```

## ssr.resolve.conditions

- **Type:** `string[]`
- **Related:** [Resolve Conditions](./shared-options.md#resolve-conditions)

Defaults to the root [`resolve.conditions`](./shared-options.md#resolve-conditions).

These conditions are used in the plugin pipeline, and only affect non-externalized dependencies during the SSR build. Use `ssr.resolve.externalConditions` to affect externalized imports.

**Example:**

```js
export default defineConfig({
  ssr: {
    resolve: {
      conditions: ['production', 'browser'],
    },
  },
})
```

## ssr.resolve.externalConditions

- **Type:** `string[]`
- **Default:** `[]`

Conditions that are used during ssr import (including `ssrLoadModule`) of externalized dependencies.

**Example:**

```js
export default defineConfig({
  ssr: {
    resolve: {
      externalConditions: ['node'],
    },
  },
})
```

## Troubleshooting

### Common Issues

1. **Externalized Dependencies Not Working**: Ensure that the dependencies you want to externalize are correctly listed in the `ssr.external` option. If you want to prevent certain dependencies from being externalized, use the `ssr.noExternal` option.

2. **Target Not Set Correctly**: If you encounter issues with the SSR build target, ensure that the `ssr.target` option is set to either `'node'` or `'webworker'` as required by your project.

3. **Resolve Conditions Not Applied**: If the resolve conditions are not being applied as expected, ensure that the `ssr.resolve.conditions` and `ssr.resolve.externalConditions` options are correctly configured.

### Further Assistance

If you encounter any issues not covered in this section, please refer to the [Vite documentation](https://vitejs.dev) or seek help from the Vite community on [Discord](https://chat.vite.dev).
