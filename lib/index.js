const fs = require('fs');
const loadConfig = require('./loadConfig');

const loadEnvConfigJson = (options) => {
	const config = loadConfig(options);
	const envJson = JSON.parse(
		fs.readFileSync(config.path, 'utf8'),
	);

	Object.keys(envJson)
		.filter((property) => !Object.hasOwnProperty.call(process.env, property))
		.forEach((property) => {
			process.env[
				config.inUpperCase ? property.toUpperCase() : property
			] = envJson[property];
		});
};

module.exports = loadEnvConfigJson;
