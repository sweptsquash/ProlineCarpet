var Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
	Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
	.setOutputPath('public/build/')
	.setPublicPath('/build')
	.addEntry('app', './assets/js/app.js')
	.splitEntryChunks()
	.enableSingleRuntimeChunk()
	.cleanupOutputBeforeBuild()
	.enableBuildNotifications()
	.enableSourceMaps(!Encore.isProduction())
	.enableVersioning(Encore.isProduction())
	.configureBabelPresetEnv((config) => {
		config.useBuiltIns = 'usage';
		config.corejs = 3;
	})
	.configureBabel((config) => {
		config.plugins.push('@babel/plugin-transform-runtime');
		config.plugins.push('@babel/plugin-proposal-class-properties');
	})
	.enableSassLoader()
	.enableIntegrityHashes(Encore.isProduction())
	.autoProvidejQuery()
	.autoProvideVariables({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
	})
	.enableReactPreset()
;

module.exports = Encore.getWebpackConfig();