module.exports = {
	extends: 'universe/native',
	plugins: ['react-hooks'],
	rules: {
		'no-case-declarations': 'off',
		'import/order': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'flowtype/no-types-missing-file-annotation': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
}
