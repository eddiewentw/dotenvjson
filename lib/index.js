const fs = require('fs');
const loadConfig = require('./loadConfig');
const writeProcessEnv = require('./writeProcessEnv');

const loadEnvConfigJson = (options) => {
	const config = loadConfig(options);
	const envJson = JSON.parse(
		fs.readFileSync(config.path, 'utf8'),
	);

	Object.keys(envJson)
		.filter((property) => !Object.hasOwnProperty.call(process.env, property))
		.forEach((property) => {
			writeProcessEnv(property, envJson[property], config.inUpperCase);
		});
};

module.exports = loadEnvConfigJson;
