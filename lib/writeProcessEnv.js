const writeProcessEnv = (property, value, forceUpperCase = false) => {
	if (typeof value !== 'string') {
		console.log(`[\x1b[38;5;8mENV\x1b[0m] The value of "${property}" is not a string.`);
	}

	process.env[
		forceUpperCase ? property.toUpperCase() : property
	] = value.toString();
};

module.exports = writeProcessEnv;
