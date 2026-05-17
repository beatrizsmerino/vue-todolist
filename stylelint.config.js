module.exports = {
	"extends": [
		"stylelint-config-standard-scss",
		"stylelint-config-recommended-vue",
		"stylelint-config-sass-guidelines",
		"stylelint-config-property-sort-order-smacss",
	],
	"plugins": [
		"stylelint-declaration-block-no-ignored-properties",
		"stylelint-scss",
	],
	"rules": {
		"@stylistic/indentation": "tab",
		"@stylistic/string-quotes": "double",
		"annotation-no-unknown": [
			true,
			{
				"ignoreAnnotations": [
					"default",
					"global",
				],
			},
		],
		"at-rule-empty-line-before": [
			"always",
			{
				"except": [
					"blockless-after-same-name-blockless",
					"first-nested",
				],
				"ignore": [
					"after-comment",
				],
				"ignoreAtRules": [
					"else",
				],
			},
		],
		"at-rule-no-unknown": null,
		"block-no-empty": true,
		"color-hex-length": "long",
		"color-no-invalid-hex": true,
		"comment-empty-line-before": [
			"always",
			{
				"except": [
					"first-nested",
				],
				"ignore": [
					"stylelint-commands",
				],
			},
		],
		"comment-no-empty": true,
		"comment-whitespace-inside": "always",
		"custom-property-empty-line-before": [
			"always",
			{
				"except": [
					"after-custom-property",
					"first-nested",
				],
				"ignore": [
					"after-comment",
					"inside-single-line-block",
				],
			},
		],
		"declaration-block-no-duplicate-custom-properties": true,
		"declaration-block-no-duplicate-properties": [
			true,
			{
				"ignore": [
					"consecutive-duplicates-with-different-values",
				],
			},
		],
		"declaration-block-no-redundant-longhand-properties": [
			true,
			{
				"ignoreShorthands": [
					"flex-flow",
				],
			},
		],
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-single-line-max-declarations": 1,
		"declaration-empty-line-before": [
			"always",
			{
				"except": [
					"after-declaration",
					"first-nested",
				],
				"ignore": [
					"after-comment",
					"inside-single-line-block",
				],
			},
		],
		"declaration-property-value-disallowed-list": null,
		"declaration-property-value-no-unknown": null,
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"function-name-case": "lower",
		"function-no-unknown": null,
		"import-notation": null,
		"keyframe-declaration-no-important": true,
		"keyframes-name-pattern": [
			"^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{
				"message": "Expected keyframe name to be kebab-case",
			},
		],
		"length-zero-no-unit": true,
		"max-nesting-depth": null,
		"media-feature-name-no-unknown": true,
		"named-grid-areas-no-invalid": true,
		"no-descending-specificity": null,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": null,
		"no-invalid-double-slash-comments": true,
		"no-invalid-position-at-import-rule": true,
		"no-irregular-whitespace": true,
		"plugin/declaration-block-no-ignored-properties": true,
		"property-no-unknown": true,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				"except": [
					"first-nested",
				],
				"ignore": [
					"after-comment",
				],
			},
		],
		"scss/at-else-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-else-closing-brace-space-after": "always-intermediate",
		"scss/at-else-empty-line-before": "never",
		"scss/at-function-pattern": [
			"^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{
				"message": "Expected function name to be kebab-case",
			},
		],
		"scss/at-if-closing-brace-newline-after": "always-last-in-chain",
		"scss/at-if-closing-brace-space-after": "always-intermediate",
		"scss/at-mixin-pattern": [
			"^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{
				"message": "Expected mixin name to be kebab-case",
			},
		],
		"scss/at-rule-no-unknown": true,
		"scss/comment-no-empty": true,
		"scss/declaration-nested-properties-no-divided-groups": true,
		"scss/declaration-property-value-no-unknown": true,
		"scss/dimension-no-non-numeric-values": true,
		"scss/dollar-variable-colon-space-after": "always-single-line",
		"scss/dollar-variable-colon-space-before": "never",
		"scss/dollar-variable-empty-line-before": [
			"always",
			{
				"except": [
					"after-dollar-variable",
					"first-nested",
				],
				"ignore": [
					"after-comment",
					"inside-single-line-block",
				],
			},
		],
		"scss/dollar-variable-no-missing-interpolation": true,
		"scss/dollar-variable-pattern": [
			"^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
			{
				"message": "Expected variable to be kebab-case",
			},
		],
		"scss/double-slash-comment-empty-line-before": [
			"always",
			{
				"except": [
					"first-nested",
				],
				"ignore": [
					"between-comments",
					"stylelint-commands",
				],
			},
		],
		"scss/double-slash-comment-whitespace-inside": "always",
		"scss/function-no-unknown": true,
		"scss/no-duplicate-dollar-variables": [
			true,
			{
				"ignoreInsideAtRules": [
					"if",
					"mixin",
				],
			},
		],
		"scss/no-duplicate-mixins": true,
		"scss/no-global-function-names": null,
		"scss/operator-no-newline-after": true,
		"scss/operator-no-newline-before": true,
		"scss/operator-no-unspaced": true,

		// Allows: BEM pattern (block__element--modifier)
		// Examples (BEM): card, card-product, card--primary, card-product--primary, card-product__title, card-product__title-text, card-product__title--primary, card-product__title--primary-dark, card-product__title--primary-2, card-product__title--2, is-active
		"selector-class-pattern": [
			"^([a-z]+[a-z0-9]*)(-[a-z0-9]+)*(__[a-z]+[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
			{
				"resolveNestedSelectors": true,
			},
		],

		// Allows: camelCase pattern
		// Examples (camelCase): header, mainContent, userProfile2
		"selector-id-pattern": [
			"^[a-z][a-zA-Z0-9]*$",
			{
				"message": "Expected ID selector to be camelCase",
			},
		],
		"selector-max-compound-selectors": null,
		"selector-max-id": 1,
		"selector-no-qualifying-type": [
			true,
			{
				"ignore": [
					"attribute",
					"class",
				],
			},
		],
		"selector-pseudo-class-no-unknown": [
			true,
			{
				"ignorePseudoClasses": [
					"v-deep",
					"deep",
				],
			},
		],
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-element-no-unknown": [
			true,
			{
				"ignorePseudoElements": [
					"v-deep",
					"deep",
				],
			},
		],
		"selector-type-case": "lower",
		"selector-type-no-unknown": [
			true,
			{
				"ignore": [
					"custom-elements",
				],
			},
		],
		"string-no-newline": true,
		"unit-no-unknown": true,
		"value-keyword-case": "lower",
	},
	"overrides": [
		{
			"customSyntax": "postcss-html",
			"files": [
				"**/*.vue",
			],
		},
		{
			"files": [
				"src/assets/scss/abstracts/mixins/_abstracts-mixins-media.scss",
			],
			"rules": {
				"media-query-no-invalid": null,
			},
		},
	],
};
