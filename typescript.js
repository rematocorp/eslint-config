import jsConfig from './shared/javascript-eslint.js' 
import tsConfig from './shared/typescript-eslint.js' 
import tsParser from '@typescript-eslint/parser'

export default [
	jsConfig,
	tsConfig,
	{
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 5,
			parserOptions: {
				parser: tsParser,
			  },
		},
	},
]
