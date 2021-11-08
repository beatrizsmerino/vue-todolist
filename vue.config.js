module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-todolist/' : '/',
	lintOnSave: true,
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: ['./src/assets/scss/styles.scss']
		}
	},
	chainWebpack: config => {
		config.module.rule('eslint').use('eslint-loader').
			options({
				fix: true
			});
	}
};
