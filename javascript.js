module.exports = {
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
		'no-duplicate-imports': 'error',
		'no-undef': 'error',
		'no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'no-var': 'error',
		'no-const-assign': 'error',
		'prefer-const': ['error', { destructuring: 'all' }],
		'spaced-comment': 'error',
		curly: 'error',
		'object-shorthand': 'error'
	},
}
