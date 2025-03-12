import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jsConfig from './javascript.js'

export default [
	...jsConfig,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
		},
	},
]
