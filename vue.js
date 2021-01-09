module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	extends: ['plugin:vue/base'],
	rules: {
		'vue/no-unused-components': 'error',
		'vue/no-unregistered-components': 'error',
	},
}
