export default {
	"extends": [
		"@commitlint/config-conventional",
	],
	"rules": {
		"body-max-line-length": [
			2,
			"always",
			10000,
		],
		"footer-leading-blank": [
			0,
			"always",
		],
		"footer-max-line-length": [
			2,
			"always",
			10000,
		],
		"header-max-length": [
			2,
			"always",
			150,
		],
		"type-enum": [
			2,
			"always",
			[
				"build",
				"ci",
				"docs",
				"feat",
				"fix",
				"perf",
				"refactor",
				"revert",
				"style",
				"test",
			],
		],
	},
};
