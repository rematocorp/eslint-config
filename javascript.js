module.exports = {
	plugins: ['import'],
	rules: {
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'lodash',
						message: "Use import from 'lodash/*' instead",
					},
				],
			},
		],
		'import/no-duplicates': 'error',
		'no-undef': 'error',
		'no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'no-var': 'error',
		'no-const-assign': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'spaced-comment': 'error',
		curly: 'error',
		'object-shorthand': 'error',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'one-var-declaration-per-line': ['error', 'always'],
		'one-var': ['error', 'never'],
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'no-unreachable': 'error',
		'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
		'no-fallthrough': 'error',
	},
}
