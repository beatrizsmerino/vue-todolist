module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/vue-todolist/'
		: '/',

	lintOnSave: false,

	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				'./src/assets/scss/styles.scss',
			]
		}
	}
}
