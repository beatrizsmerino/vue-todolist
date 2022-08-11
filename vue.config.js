const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-todolist/' : '/',
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: ['./src/assets/scss/styles.scss']
		}
	},

	/*
	 * Emit 'eslint' errors and warnings in the console
	 * https://cli.vuejs.org/config/#lintonsave
	 */
	lintOnSave: true,

	configureWebpack: {
		plugins: [

			// Add configuration for autofix eslint errors
			new ESLintPlugin({
				fix: true,
				files: ['src/**/*.{vue,js}']
			}),

			// Add configuration for autofix stylelint errors
			new StyleLintPlugin({
				fix: true,
				files: ['src/**/*.{vue,scss}']
			})
		]
	}
};
