module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:json/recommended'
	],
	plugins: ['vue', 'prettier'],
	rules: {
		'accessor-pairs': 2,
		'array-bracket-newline': 2,
		'array-bracket-spacing': 2,
		'array-callback-return': 1,
		'array-element-newline': 2,
		'arrow-body-style': [1, 'as-needed'],
		'arrow-parens': 0,
		'arrow-spacing': 2,
		'block-scoped-var': 2,
		'block-spacing': 2,
		'brace-style': 0,
		'callback-return': 2,
		camelcase: [
			1,
			{
				properties: 'always',
				ignoreDestructuring: true,
				ignoreImports: true
			}
		],
		'capitalized-comments': 0,
		'class-methods-use-this': 2,
		'comma-dangle': [
			2,
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'comma-spacing': 2,
		'comma-style': 2,
		complexity: 0,
		'computed-property-spacing': 2,
		'consistent-return': 2,
		'consistent-this': 1,
		curly: 2,
		'default-case': 2,
		'default-param-last': 2,
		'dot-location': 2,
		'dot-notation': 2,
		'eol-last': 2,
		eqeqeq: 0,
		'func-call-spacing': 2,
		'func-name-matching': 2,
		'func-names': 0,
		'func-style': 0,
		'function-call-argument-newline': [2, 'consistent'],
		'function-paren-newline': 2,
		'generator-star-spacing': 0,
		'global-require': 0,
		'grouped-accessor-pairs': 2,
		'guard-for-in': 1,
		'handle-callback-err': 2,
		'id-blacklist': 2,
		'id-length': [
			2,
			{
				min: 1
			}
		],
		'id-match': 2,
		'implicit-arrow-linebreak': 2,
		'import/no-named-as-default': 0,
		'init-declarations': 1,
		indent: [2, 'tab'],
		'jsx-quotes': [2, 'prefer-double'],
		'key-spacing': 2,
		'keyword-spacing': 2,
		'line-comment-position': 2,
		'linebreak-style': 0,
		'lines-around-comment': [
			1,
			{
				allowBlockStart: true,
				beforeBlockComment: true,
				beforeLineComment: true
			}
		],
		'lines-around-directive': 2,
		'lines-between-class-members': 2,
		'max-classes-per-file': 1,
		'max-depth': 1,
		'max-length': 0,
		'max-lines': [
			1,
			{
				max: 500,
				skipComments: true,
				skipBlankLines: true
			}
		],
		'max-lines-per-function': [
			1,
			{
				max: 100
			}
		],
		'max-nested-callbacks': 2,
		'max-params': 2,
		'max-statements': 0,
		'max-statements-per-line': 2,
		'multiline-comment-style': 2,
		'multiline-ternary': 0,
		'new-cap': 2,
		'new-parens': 2,
		'newline-after-var': 0,
		'newline-before-return': 2,
		'newline-per-chained-call': 2,
		'no-alert': 1,
		'no-array-constructor': 2,
		'no-await-in-loop': 2,
		'no-bitwise': 2,
		'no-buffer-constructor': 2,
		'no-caller': 2,
		'no-catch-shadow': 2,
		'no-confusing-arrow': 2,

		// Allow console.log during development only
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// Allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-constructor-return': 2,
		'no-continue': 2,
		'no-div-regex': 2,
		'no-dupe-else-if': 2,
		'no-duplicate-imports': 2,
		'no-else-return': 2,
		'no-empty': 1,
		'no-empty-function': 2,
		'no-eq-null': 2,
		'no-eval': 2,
		'no-extend-native': 2,
		'no-extra-bind': 2,
		'no-extra-label': 2,
		'no-extra-parens': 2,
		'no-floating-decimal': 2,
		'no-implicit-coercion': 2,
		'no-implicit-globals': 2,
		'no-implied-eval': 2,
		'no-import-assign': 2,
		'no-inline-comments': 2,
		'no-invalid-this': 0,
		'no-iterator': 2,
		'no-label-var': 2,
		'no-labels': 2,
		'no-lone-blocks': 2,
		'no-lonely-if': 2,
		'no-loop-func': 2,
		'no-magic-numbers': 0,
		'no-mixed-operators': 0,
		'no-mixed-requires': 2,
		'no-multi-assign': 2,
		'no-multi-spaces': 2,
		'no-multi-str': 2,
		'no-multiple-empty-lines': 2,
		'no-native-reassign': 2,
		'no-negated-condition': 0,
		'no-negated-in-lhs': 2,
		'no-nested-ternary': 2,
		'no-new': 0,
		'no-new-func': 2,
		'no-new-object': 2,
		'no-new-require': 2,
		'no-new-wrappers': 2,
		'no-octal-escape': 2,
		'no-param-reassign': [
			1,
			{
				props: false
			}
		],
		'no-path-concat': 2,
		'no-plusplus': 0,
		'no-process-env': 0,
		'no-process-exit': 0,
		'no-proto': 2,
		'no-prototype-builtins': 0,
		'no-restricted-globals': 2,
		'no-restricted-imports': 2,
		'no-restricted-modules': 2,
		'no-restricted-properties': 2,
		'no-restricted-syntax': 2,
		'no-return-assign': 2,
		'no-return-await': 2,
		'no-script-url': 2,
		'no-self-compare': 2,
		'no-sequences': 2,
		'no-setter-return': 2,
		'no-shadow': 0,
		'no-spaced-func': 2,
		'no-sync': 0,
		'no-tabs': 0,
		'no-template-curly-in-string': 2,
		'no-ternary': 0,
		'no-throw-literal': 2,
		'no-trailing-spaces': 2,
		'no-undef': 1,
		'no-undef-init': 1,
		'no-undefined': 1,
		'no-underscore-dangle': 1,
		'no-unmodified-loop-condition': 1,
		'no-unneeded-ternary': 1,
		'no-unused-vars': 1,
		'no-unused-expressions': 1,
		'no-use-before-define': [
			2,
			{
				functions: false,
				classes: true
			}
		],
		'no-useless-call': 1,
		'no-useless-computed-key': 1,
		'no-useless-concat': 1,
		'no-useless-constructor': 1,
		'no-useless-rename': 1,
		'no-useless-return': 1,
		'no-var': 1,
		'no-void': 2,
		'no-warning-comments': 2,
		'no-whitespace-before-property': 2,
		'nonblock-statement-body-position': 2,
		'object-curly-newline': 2,
		'object-curly-spacing': 2,
		'object-property-newline': [
			2,
			{
				allowAllPropertiesOnSameLine: true
			}
		],
		'object-shorthand': 2,
		'one-var': 0,
		'one-var-declaration-per-line': 0,
		'operator-assignment': 2,
		'operator-linebreak': 2,
		'padded-blocks': [1, 'never'],
		'padding-line-between-statements': 2,
		'prefer-arrow-callback': [
			0,
			{
				allowNamedFunctions: false,
				allowUnboundThis: false
			}
		],
		'prefer-const': 1,
		'prefer-destructuring': 0,
		'prefer-exponentiation-operator': 2,
		'prefer-named-capture-group': 2,
		'prefer-numeric-literals': 2,
		'prefer-object-spread': 2,
		'prefer-promise-reject-errors': 2,
		'prefer-reflect': 0,
		'prefer-regex-literals': 2,
		'prefer-rest-params': 2,
		'prefer-spread': 2,
		'prefer-template': 2,
		'quote-props': [2, 'consistent'],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		radix: [2, 'as-needed'],
		'require-atomic-updates': 2,
		'require-await': 1,
		'require-unicode-regexp': 2,
		'rest-spread-spacing': 2,
		semi: [2, 'always'],
		'semi-spacing': 2,
		'semi-style': 2,
		'sort-imports': 0,
		'sort-keys': 0,
		'sort-vars': 2,
		'space-before-blocks': 2,
		'space-before-function-paren': [
			2,
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': 2,
		'space-infix-ops': 2,
		'space-unary-ops': 2,
		'spaced-comment': 2,
		strict: 2,
		'switch-colon-spacing': 2,
		'symbol-description': 2,
		'template-curly-spacing': 2,
		'template-tag-spacing': 2,
		'unicode-bom': [2, 'never'],
		'vars-on-top': 2,
		'wrap-iife': 2,
		'wrap-regex': 2,
		'yield-star-spacing': 2,
		yoda: 2,

		// VUE
		'vue/html-closing-bracket-spacing': 0,
		'vue/html-closing-bracket-newline': [
			2,
			{
				singleline: 'never',
				multiline: 'always'
			}
		],
		'vue/html-indent': [
			2,
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 1,
				multiline: 1
			}
		],
		'vue/multi-word-component-names': 0,
		'vue/component-name-in-template-casing': [2, 'PascalCase'],
		'vue/no-v-html': 0,
		'vue/script-indent': [
			2,
			'tab',
			{
				baseIndent: 1,
				switchCase: 0,
				ignores: []
			}
		],
		'vue/singleline-html-element-content-newline': [
			1,
			{
				ignoreWhenEmpty: true,
				ignores: ['pre']
			}
		],
		'vue/no-side-effects-in-computed-properties': 0,
		'vue/require-default-prop': 0
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off'
			}
		}
	]
}
