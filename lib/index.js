const fs = require('fs');
const path = require('path');

const loadEnvConfigJson = (options = {}) => {
	const envJson = JSON.parse(
		fs.readFileSync(
			options.path || path.join(process.cwd(), '.env.json'),
			'utf8',
		),
	);

	Object.keys(envJson)
		.filter((property) => !Object.hasOwnProperty.call(process.env, property))
		.forEach((property) => {
			process.env[property.toUpperCase()] = envJson[property];
		});
};

module.exports = loadEnvConfigJson;
