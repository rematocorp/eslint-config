module.exports = {
	plugins: ['@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
}
