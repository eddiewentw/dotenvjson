const writeProcessEnv = (property, value, forceUpperCase = false) => {
	process.env[
		forceUpperCase ? property.toUpperCase() : property
	] = value;
};

module.exports = writeProcessEnv;
