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
		'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
		'spaced-comment': 'error',
	},
}
