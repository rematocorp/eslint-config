import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import jsConfig from './shared/javascript-eslint.js'

export default [
	...jsConfig,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
			},
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
