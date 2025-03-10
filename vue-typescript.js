import vueConfig from './shared/vue-eslint.js'
import jsConfig from './shared/javascript-eslint.js'
import tsParser from '@typescript-eslint/parser'

export default [
	...jsConfig,
	...vueConfig,
	{
		files: ['**/*.{ts,tsx,vue}'],
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 5,
			parserOptions: {
				parser: tsParser,
			},
		},
		rules: {
			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
]
