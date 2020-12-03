
const path = require("path");

const utils = {
	assetsPath: function (_path) {
		const assetsSubDirectory = process.env.NODE_ENV === 'production'
			// 生产环境下的 static 路径
			? 'static'
			// 开发环境下的 static 路径
			: 'static'

		return path.posix.join(assetsSubDirectory, _path)
	},
	resolve: function (dir) {
		return path.join(__dirname, '..', dir)
	}
}

const ENV = process.env.NODE_ENV;




module.exports = {
	outputDir: "docs",
	publicPath: ENV === "development" ? "" : "/page/",
	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].title = "focus";
				return args;
			})
	},
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: utils.assetsPath('fonrs/[name].[hash:7].[ext]')
					}
				}
			]
		},
	}

};