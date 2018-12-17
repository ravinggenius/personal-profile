const ConfConf = require('conf_conf');
const dotenv = require('dotenv');

dotenv.config();

module.exports = ConfConf.configure(process.env, {
	googleAnalyticsId: {
		filter: _ => (_ === '' ? null : _),
		ifUndefined: ''
	}
});
