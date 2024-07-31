import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import javascript from './javascript'
import typescript from './common/typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat.extends('./vue'),
	javascript,
	typescript,
	{
		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'module',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	},
]
