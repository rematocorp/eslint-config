import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...reactHooks.configs['recommended-latest'],
	...compat.extends('eslint-config-universe/native'),
	{
		plugins: {
			'react-hooks': reactHooksPlugin,
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			'no-case-declarations': 'off',
			'import/order': 'off',
			'no-restricted-imports': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'flowtype/no-types-missing-file-annotation': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
]
