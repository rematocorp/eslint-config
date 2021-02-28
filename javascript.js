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
		'spaced-comment': 'error',
	},
}
