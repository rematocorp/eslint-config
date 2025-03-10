import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginSortExportAll from 'eslint-plugin-sort-export-all'

export default [
	{
		plugins: {
			import: eslintPluginImport,
			'sort-export-all': eslintPluginSortExportAll,
		},
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
			'import/no-duplicates': 'error',
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'sort-export-all/sort-export-all': ['error', 'asc', { caseSensitive: false }],
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
				},
			],
		},
	},
]
