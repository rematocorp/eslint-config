import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fixupConfigRules } from '@eslint/compat'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	// https://github.com/expo/expo/issues/28144
	...fixupConfigRules(compat.extends('eslint-config-universe/native')),
	{
		rules: {
			'import/order': 'off',
			'no-case-declarations': 'off',
			'no-restricted-imports': 'off',
			'no-useless-concat': 'off',
			'no-useless-escape': 'off',
			'no-extra-boolean-cast': 'off',
			'prefer-promise-reject-errors': 'off',
			'flowtype/no-types-missing-file-annotation': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-console': ['error', { allow: ['warn', 'error'] }],
		},
	},
]
