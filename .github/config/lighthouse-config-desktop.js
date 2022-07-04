module.exports = {
	extends: 'lighthouse:default',
	url: 'https://layer5.io/',
	settings: {
		scores: {
			performance: 90,
			accessibility: 90,
			'best-practices': 90,
			seo: 80,
		},
		// 'onlyCategories': [
		//   'performance',
		//   'accessibility',
		//   'best-practices',
		//   'seo'`
		// ],
		// 'skipAudits': [
		//   'byte-efficiency/uses-responsive-images',
		//   'byte-efficiency/uses-webp-images',
		//   'seo/meta-description'
		// ]
	},
	ci: {
		collect: {
			settings: {
				emulatedFormFactor: 'desktop',
				plugins: ['lighthouse-plugin-field-performance'],
			},
		},
	},
};