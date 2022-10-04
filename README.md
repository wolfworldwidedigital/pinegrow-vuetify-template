# pinegrow-vuetify-template

This template can be used to create a Vue 3 + Vite app that can be visually designed with Pinegrow Vue Designer.

Vue 3 + Vite 2 + Vuetify 3 + Vue Router 4 + Pinia 2

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

To use vue-devtools electron app during development,

1. Add the following code to the top of main.js

```javascript
import devtools from '@vue/devtools'
if (process.env.NODE_ENV === 'development') {
	devtools.connect(/* host, port */)
}
```

2. Run this command in a secondary terminal/console instance

```sh
npm run vue-devtools
```

### Compile and Minify for Production

```sh
npm run build
```
