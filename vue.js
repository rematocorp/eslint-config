module.exports = {
	extends: ['plugin:vue/base', './javascript'],
	rules: {
		'vue/no-unused-components': 'error',
		'vue/no-undef-components': 'error',
		'vue/this-in-template': 'error',
		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: false,
			},
		],
	},
}
