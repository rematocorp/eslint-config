import typescriptEslint from '@typescript-eslint/eslint-plugin'

export default [
	{
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					ignoreRestSiblings: true,
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-undef': 'off',
		},
	},
]
