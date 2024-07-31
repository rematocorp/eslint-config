import reactHooks from 'eslint-plugin-react-hooks'
import { fixupPluginRules } from '@eslint/compat'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat.extends('universe/native'),
	{
		plugins: {
			'react-hooks': fixupPluginRules(reactHooks),
		},
		rules: {
			'no-case-declarations': 'off',
			'import/order': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'flowtype/no-types-missing-file-annotation': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
]
