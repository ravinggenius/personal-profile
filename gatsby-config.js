const config = require('./config');

module.exports = {
	plugins: [
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsId,
				anonymize: true,
				respectDNT: true
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.name,
				short_name: config.shortName,
				start_url: '/',
				background_color: config.themeColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: 'src/images/profile.jpeg'
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/src/data`,
				ignore: ['**/.*.md']
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp'
	],
	siteMetadata: {
		description: config.description,
		keywords: config.keywords,
		title: config.name
	}
};
