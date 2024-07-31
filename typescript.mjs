import tsParser from '@typescript-eslint/parser'
import javascript from './javascript'
import typescript from './common/typescript'

export default [
	javascript,
	typescript,
	{
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'module',
		},
	},
]
