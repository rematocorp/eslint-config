import vueConfig from './shared/vue-eslint.js'
import jsConfig from './shared/javascript-eslint.js'
import tsConfig from './shared/typescript-eslint.js'
import tsParser from '@typescript-eslint/parser'

export default [
	...vueConfig,
	...jsConfig,
	...tsConfig,
	{
		files: ['**/*.{ts,tsx,vue}'],
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 5,
			parserOptions: {
				parser: tsParser,
			  },
		},
	},
]
