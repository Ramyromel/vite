<p align="center">
  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vite.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://pr.new/vitejs/vite"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://chat.vite.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/vit/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a new breed of frontend build tooling that significantly improves the frontend development experience. It consists of two major parts:

- A dev server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), with [rich built-in features](https://vite.dev/guide/features.html) and astonishingly fast [Hot Module Replacement (HMR)](https://vite.dev/guide/features.html#hot-module-replacement).

- A [build command](https://vite.dev/guide/build.html) that bundles your code with [Rollup](https://rollupjs.org), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vite.dev/guide/api-plugin.html) and [JavaScript API](https://vite.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vite.dev).

## Features

Vite offers a range of features that make it a powerful and flexible tool for modern web development:

- **Instant Server Start**: Vite starts the development server instantly, even for large projects. This is achieved by leveraging native ES modules and only transforming the code that is actually imported on the current screen.

- **Lightning Fast HMR**: Vite's Hot Module Replacement (HMR) is designed to be extremely fast. It updates only the modules that have changed, without reloading the entire page. This ensures a smooth and efficient development experience.

- **Rich Features**: Vite comes with a variety of built-in features, including support for TypeScript, JSX, CSS preprocessors, and more. It also provides a powerful plugin system that allows you to extend its functionality.

- **Optimized Build**: Vite uses Rollup for production builds, which ensures that your code is bundled and optimized for performance. It also supports code splitting, tree-shaking, and other advanced optimization techniques.

- **Universal Plugin Interface**: Vite's plugin system is built on top of Rollup's plugin interface, making it easy to reuse existing Rollup plugins. It also provides additional hooks and features specific to Vite.

- **Fully Typed APIs**: Vite's APIs are fully typed, providing a great developer experience when using TypeScript. This includes the configuration file, plugin API, and more.

## Getting Started

To get started with Vite, follow these steps:

1. **Install Vite**: You can install Vite using your preferred package manager. For example, with npm:

```bash
npm create vite@latest
```

2. **Create a Project**: Follow the prompts to create a new Vite project. You can choose from a variety of templates, including vanilla JavaScript, Vue, React, and more.

3. **Navigate to the Project Directory**: Change into the project directory:

```bash
cd my-vite-project
```

4. **Install Dependencies**: Install the project dependencies:

```bash
npm install
```

5. **Start the Development Server**: Start the Vite development server:

```bash
npm run dev
```

6. **Build for Production**: When you're ready to build your project for production, run:

```bash
npm run build
```

7. **Preview the Production Build**: You can preview the production build locally using:

```bash
npm run preview
```

## Examples and Use Cases

Here are some examples and use cases to demonstrate how to use Vite in different scenarios:

### Example 1: Using Vite with Vue.js

1. Create a new Vite project with the Vue template:

```bash
$ npm create vite@latest my-vue-app -- --template vue
```

2. Navigate to the project directory and install dependencies:

```bash
$ cd my-vue-app
$ npm install
```

3. Start the development server:

```bash
$ npm run dev
```

4. Open `src/App.vue` and make changes to see the hot module replacement in action.

### Example 2: Using Vite with React

1. Create a new Vite project with the React template:

```bash
$ npm create vite@latest my-react-app -- --template react
```

2. Navigate to the project directory and install dependencies:

```bash
$ cd my-react-app
$ npm install
```

3. Start the development server:

```bash
$ npm run dev
```

4. Open `src/App.jsx` and make changes to see the hot module replacement in action.

### Example 3: Using Vite with TypeScript

1. Create a new Vite project with the TypeScript template:

```bash
$ npm create vite@latest my-ts-app -- --template vanilla-ts
```

2. Navigate to the project directory and install dependencies:

```bash
$ cd my-ts-app
$ npm install
```

3. Start the development server:

```bash
$ npm run dev
```

4. Open `src/main.ts` and make changes to see the hot module replacement in action.

### Example 4: Using Vite with Svelte

1. Create a new Vite project with the Svelte template:

```bash
$ npm create vite@latest my-svelte-app -- --template svelte
```

2. Navigate to the project directory and install dependencies:

```bash
$ cd my-svelte-app
$ npm install
```

3. Start the development server:

```bash
$ npm run dev
```

4. Open `src/App.svelte` and make changes to see the hot module replacement in action.

### Example 5: Using Vite with Preact

1. Create a new Vite project with the Preact template:

```bash
$ npm create vite@latest my-preact-app -- --template preact
```

2. Navigate to the project directory and install dependencies:

```bash
$ cd my-preact-app
$ npm install
```

3. Start the development server:

```bash
$ npm run dev
```

4. Open `src/App.jsx` and make changes to see the hot module replacement in action.

## Packages

| Package                                         | Version (click for changelogs)                                                                                                    |
| ----------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [vite](packages/vite)                           | [![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)](packages/vite/CHANGELOG.md)                                    |
| [@vitejs/plugin-legacy](packages/plugin-legacy) | [![plugin-legacy version](https://img.shields.io/npm/v/@vitejs/plugin-legacy.svg?label=%20)](packages/plugin-legacy/CHANGELOG.md) |
| [create-vite](packages/create-vite)             | [![create-vite version](https://img.shields.io/npm/v/create-vite.svg?label=%20)](packages/create-vite/CHANGELOG.md)               |

## Contribution

See [Contributing Guide](CONTRIBUTING.md).

## License

[MIT](LICENSE).

## Sponsors

<p align="center">
  <a target="_blank" href="https://github.com/sponsors/yyx990803">
    <img alt="sponsors" src="https://sponsors.vuejs.org/vite.svg?v2">
  </a>
</p>
