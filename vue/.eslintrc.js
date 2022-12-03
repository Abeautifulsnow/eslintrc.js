module.exports = {
	root: true,
	env: {
    node: true,
    browser: true,
    es6: true,
	},
	globals: {
		publicPath: 'readonly'
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/eslint-config-prettier',
		'@vue/prettier',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	plugins: ['@typescript-eslint'],
	// 具体参考: https://www.npmjs.com/package/@typescript-eslint/parser Configuration 部分
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		project: ['./tsconfig.json'],
	},
	ignorePatterns: ['shims-vue.d.ts'],
	rules: {
		'no-empty': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': ['off'],
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				semi: false,
				trailingComma: 'all'
			}
		],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'no-useless-escape': 0,
		'no-unused-expressions': 0,
		'no-useless-constructor': 0,
		'@typescript-eslint/no-useless-constructor': 'error',
		indent: 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		eqeqeq: 0,
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				mocha: true
			}
		}
	]
}
