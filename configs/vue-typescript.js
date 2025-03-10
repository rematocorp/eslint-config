import vueConfig from './vue.js'
import tsConfig from './typescript.js'
import jsConfig from './javascript.js'
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
