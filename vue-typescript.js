import vueConfig from './shared/vue-eslint.js'
import tsConfig from './shared/typescript-eslint.js'
import jsConfig from './shared/javascript-eslint.js'
import tsParser from '@typescript-eslint/parser'

export default [
	...jsConfig,
	...tsConfig,
	...vueConfig,
	{
		files: ['**/*.vue'],
		languageOptions: {
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
