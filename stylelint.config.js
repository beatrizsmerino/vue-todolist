module.exports = {
	customSyntax: "postcss-html",
	extends: [
		"stylelint-config-prettier",
		"stylelint-config-standard",
		"stylelint-config-sass-guidelines",
		"stylelint-config-property-sort-order-smacss"
	],
	plugins: [
		"stylelint-scss"
	],

	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		"at-rule-empty-line-before": [
			"always",
			{
				except: [
					"blockless-after-same-name-blockless",
					"first-nested"
				],
				ignore: [
					"after-comment"
				]
			}
		],
		"at-rule-name-case": "lower",
		"at-rule-name-space-after": "always-single-line",
		"at-rule-no-unknown": null,
		"at-rule-semicolon-newline-after": "always",
		"block-closing-brace-empty-line-before": "never",
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-before": "always-single-line",
		"block-no-empty": true,
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-space-after": "always-single-line",
		"block-opening-brace-space-before": "always",
		"color-hex-case": "upper",
		"color-hex-length": "long",
		"color-no-invalid-hex": true,
		"comment-empty-line-before": [
			"always",
			{
				except: [
					"first-nested"
				],
				ignore: [
					"stylelint-commands"
				]
			}
		],
		"comment-no-empty": true,
		"comment-whitespace-inside": "always",
		"custom-property-empty-line-before": [
			"always",
			{
				except: [
					"after-custom-property",
					"first-nested"
				],
				ignore: [
					"after-comment",
					"inside-single-line-block"
				]
			}
		],
		"declaration-bang-space-after": "never",
		"declaration-bang-space-before": "always",
		"declaration-block-no-duplicate-custom-properties": true,
		"declaration-block-no-duplicate-properties": [
			true,
			{
				ignore: [
					"consecutive-duplicates-with-different-values"
				]
			}
		],
		"declaration-block-no-shorthand-property-overrides": true,
		"declaration-block-semicolon-newline-after": "always-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 1,
		"declaration-block-trailing-semicolon": "always",
		"declaration-colon-newline-after": "always-multi-line",
		"declaration-colon-space-after": "always-single-line",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": [
			"always",
			{
				except: [
					"after-declaration",
					"first-nested"
				],
				ignore: [
					"after-comment",
					"inside-single-line-block"
				]
			}
		],
		"font-family-no-duplicate-names": true,
		"font-family-no-missing-generic-family-keyword": true,
		"function-calc-no-unspaced-operator": true,
		"function-comma-newline-after": "always-multi-line",
		"function-comma-space-after": "always-single-line",
		"function-comma-space-before": "never",
		"function-linear-gradient-no-nonstandard-direction": true,
		"function-max-empty-lines": 0,
		"function-name-case": "lower",
		"function-no-unknown": [
			true,
			{
				ignoreFunctions: [
					"mix"
				]
			}
		],
		"function-parentheses-newline-inside": "always-multi-line",
		"function-parentheses-space-inside": "never-single-line",
		"function-whitespace-after": "always",
		"indentation": "tab",
		"keyframe-declaration-no-important": true,
		"length-zero-no-unit": true,
		"max-empty-lines": 1,
		"max-nesting-depth": null,
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-name-no-unknown": true,
		"media-feature-parentheses-space-inside": "never",
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",
		"media-query-list-comma-newline-after": "always-multi-line",
		"media-query-list-comma-space-after": "always-single-line",
		"media-query-list-comma-space-before": "never",
		"named-grid-areas-no-invalid": true,
		"no-descending-specificity": null,
		"no-duplicate-at-import-rules": true,
		"no-duplicate-selectors": true,
		"no-empty-source": null,
		"no-eol-whitespace": true,
		"no-extra-semicolons": true,
		"no-invalid-double-slash-comments": true,
		"no-invalid-position-at-import-rule": true,
		"no-irregular-whitespace": true,
		"no-missing-end-of-source-newline": true,
		"number-leading-zero": "always",
		"number-no-trailing-zeros": true,
		"property-case": "lower",
		"property-no-unknown": true,
		"rule-empty-line-before": [
			"always-multi-line",
			{
				except: [
					"first-nested"
				],
				ignore: [
					"after-comment"
				]
			}
		],
		"scss/at-rule-no-unknown": true,
		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-class-pattern": null,
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-list-comma-newline-after": "always",
		"selector-list-comma-space-before": "never",
		"selector-no-qualifying-type": [
			true,
			{
				ignore: [
					"attribute",
					"class"
				]
			}
		],
		"selector-max-compound-selectors": null,
		"selector-max-empty-lines": 0,
		"selector-max-id": 1,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: [
					"v-deep",
					"deep"
				]
			}
		],
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "single",
		"selector-pseudo-element-no-unknown": [
			true,
			{
				ignorePseudoElements: [
					"v-deep",
					"deep"
				]
			}
		],
		"selector-type-case": "lower",
		"selector-type-no-unknown": [
			true,
			{
				ignore: [
					"custom-elements"
				]
			}
		],
		"string-no-newline": true,
		"unit-case": "lower",
		"unit-no-unknown": true,
		"value-keyword-case": "lower",
		"value-list-comma-newline-after": "always-multi-line",
		"value-list-comma-space-after": "always-single-line",
		"value-list-comma-space-before": "never",
		"value-list-max-empty-lines": 0
	}
};
