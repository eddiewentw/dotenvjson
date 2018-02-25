const path = require('path');

const appConfig = {
	path: path.join(process.cwd(), '.env.json'),
};

const loadConfig = (options) => {
	if (!options || Object.values(options).length === 0) {
		return appConfig;
	}

	Object.keys(appConfig).forEach((property) => {
		if (!Object.hasOwnProperty.call(options, property)) {
			return;
		}

		appConfig[property] = options[property];
	});

	return appConfig;
};

module.exports = loadConfig;
