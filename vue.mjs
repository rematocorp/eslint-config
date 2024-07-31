import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import javascript from './javascript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	javascript,
	...compat.extends('plugin:vue/base', 'plugin:vue/vue3-essential'),
	{
		rules: {
			'vue/no-reserved-component-names': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-mutating-props': 'off',
			'vue/return-in-computed-property': 'off',
			'vue/valid-v-for': 'off',
			'vue/require-v-for-key': 'off',
			'vue/no-unused-components': 'error',
			'vue/no-undef-components': [
				'error',
				{
					ignorePatterns: ['portal', 'portal-target', 'router-view', 'router-link', 'v-*'],
				},
			],
			'vue/this-in-template': 'error',
			'vue/attributes-order': [
				'error',
				{
					order: [
						'DEFINITION',
						'LIST_RENDERING',
						'CONDITIONALS',
						'RENDER_MODIFIERS',
						'GLOBAL',
						['UNIQUE', 'SLOT'],
						'TWO_WAY_BINDING',
						'OTHER_DIRECTIVES',
						'OTHER_ATTR',
						'EVENTS',
						'CONTENT',
					],
					alphabetical: false,
				},
			],
			'vue/no-unused-properties': [
				'error',
				{
					groups: ['props', 'data', 'computed'],
					deepData: true,
					ignorePublicMembers: true,
				},
			],
		},
	},
]
