module.exports = {
	extends: ['plugin:vue/base', './javascript'],
	rules: {
		'vue/no-unused-components': 'error',
		'vue/no-unregistered-components': 'error',
		'vue/this-in-template': 'error',
	},
}
