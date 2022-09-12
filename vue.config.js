const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {

	// The base URL your application bundle will be deployed at
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-todolist/' : '/',

	// Add configuration for use Dart sass/scss and compile files of 'assets' folder
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

	// Add configuration for autofix stylelint errors
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
