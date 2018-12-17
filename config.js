const ConfConf = require('conf_conf');
const dotenv = require('dotenv');

dotenv.config();

module.exports = ConfConf.configure(process.env, {
	description: {
		ifUndefined: 'Self-hosted personal profile page'
	},

	googleAnalyticsId: {
		filter: _ => (_ === '' ? null : _),
		ifUndefined: ''
	},

	keywords: {
		filter: _ => _.split(','),
		ifUndefined: 'profile'
	},

	name: {
		ifUndefined: 'Personal Profile'
	},

	shortName: {
		ifUndefined: 'Profile'
	},

	themeColor: {
		ifUndefined: '#7F7F7F'
	}
});
