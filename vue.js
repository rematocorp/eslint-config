module.exports = {
	extends: ['plugin:vue/base', 'plugin:vue/essential', './javascript'],
	rules: {
		// Disables undesired checks
		'vue/no-reserved-component-names': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-mutating-props': 'off',
		'vue/return-in-computed-property': 'off',
		'vue/valid-v-for': 'off',
		'vue/require-v-for-key': 'off',

		'vue/no-unused-components': 'error',
		'vue/no-undef-components': [
			'error',
			{ ignorePatterns: ['portal', 'portal-target', 'router-view', 'router-link', 'v-*'] },
		],
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
		'vue/no-unused-properties': [
			'error',
			{
				groups: ['props', 'data', 'computed'],
				deepData: true,
				ignorePublicMembers: true,
			},
		],
	},
}
