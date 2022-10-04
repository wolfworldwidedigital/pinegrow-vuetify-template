import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'
import { liveDesigner } from '@pinegrow/vite-plugin'
import { pinegrowVuetifyPlugin } from '@pinegrow/vuetify-plugin'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		// http://pinegrow.com/docs/vue-designer
		liveDesigner({
			plugins: [pinegrowVuetifyPlugin],
			iconsets: ['all'],
			usingStandaloneVueDevtools: true
		}),

		// https://github.com/vitejs/vite/tree/main/packages/plugin-vue
		Vue(),

		// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
		Vuetify({ autoImport: true }),

		// https://github.com/unocss/unocss/tree/main/packages/preset-icons
		Unocss({
			presets: [
				presetIcons({
					prefix: '' // to override the default prefix 'i' added by icones (used in vue-designer's icon-picker)
				})
			]
		}),

		// https://github.com/antfu/unplugin-vue-components
		Components({
			dirs: ['src/components']
		}),

		// https://github.com/antfu/unplugin-auto-import
		AutoImport({
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'pinia',
				'@vueuse/head'
				// '@vueuse/core'
				// // custom
				// {
				// '@vueuse/core': [
				// 	// named imports
				// 	'useMouse', // import { useMouse } from '@vueuse/core',
				// 	// alias
				// 	['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
				// ],
				// '@vueuse/head': [
				// 	// named imports
				// 	'useHead' // import { useMouse } from '@vueuse/head',
				// ]
				// axios: [
				// 	// default imports
				// 	['default', 'axios'] // import { default as axios } from 'axios',
				// ],
				// '[package-name]': [
				// 	'[import-names]',
				// 	// alias
				// 	['[from]', '[alias]']
				// ]
				// }
			],

			// Auto import for all module exports under directories
			dirs: [
				// './hooks',
				// './composables'
				// ...
			],

			// Filepath to generate corresponding .d.ts file.
			// Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
			// Set `false` to disable.
			dts: false, // './auto-imports.d.ts',

			// Auto import inside Vue template
			// see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
			vueTemplate: false,

			// Custom resolvers, compatible with `unplugin-vue-components`
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [
				/* ... */
			]

			// Generate corresponding .eslintrc-auto-import.json file.
			// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
			// eslintrc: {
			// 	enabled: false, // Default `false`
			// 	filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			// 	globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			// }
		})
	],

	// https://vitejs.dev/config/#resolve-alias
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
