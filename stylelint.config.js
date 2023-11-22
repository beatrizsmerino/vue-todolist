module.exports = {
	"customSyntax": "postcss-html",
	"extends": [
		"stylelint-config-standard",
		"stylelint-config-recommended-vue",
		"stylelint-config-sass-guidelines",
		"stylelint-config-property-sort-order-smacss",
	],
	"plugins": [
		"stylelint-scss",
	],
	"rules": {
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
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-unspaced-operator": true,
		"function-linear-gradient-no-nonstandard-direction": true,
		"function-name-case": "lower",
		"function-no-unknown": [
			true,
			{
				"ignoreFunctions": [
					"mix",
				],
			},
		],
		"import-notation": null,
		"keyframe-declaration-no-important": true,
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
		"scss/at-rule-no-unknown": true,
		"scss/no-global-function-names": null,
		"selector-class-pattern": [
			"^([a-z]+[a-z0-9]*)(-[a-z0-9]+)*(__[a-z]+[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z]+[a-z0-9]+(-[a-z0-9]+)*)?$",
			{
				"resolveNestedSelectors": true,
			},
		],
		"selector-id-pattern": [
			"error",
			{
				"format": "camelCase",
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
		"selector-pseudo-element-colon-notation": "single",
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
};
