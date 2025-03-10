import vueConfig from './vue.config.js'
import jsConfig from './shared/javascript.config.js'
import tsConfig from './common/typescript.config.js'
import tsParser from '@typescript-eslint/parser'

export default [
	vueConfig,
	jsConfig,
	tsConfig,
	{
		files: ['**/*.{ts,tsx,vue}'],
		languageOptions: {
			sourceType: 'module',
			ecmaVersion: 5,
			parserOptions: {
				parser: tsParser,
			  },
		},
	},
]
