const warningMessage = require('./warningMessage');

const writeProcessEnv = (property, value, forceUpperCase = false) => {
	if (typeof value !== 'string') {
		warningMessage(`The value of "${property}" is not a string.`);
	}

	process.env[
		forceUpperCase ? property.toUpperCase() : property
	] = value.toString();
};

module.exports = writeProcessEnv;
