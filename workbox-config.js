module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,css,jpg,png,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};