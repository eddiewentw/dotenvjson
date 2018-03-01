const warningMessage = (message) => {
	console.log(`[\x1b[38;5;8mENV\x1b[0m] ${message}`);
};

module.exports = warningMessage;
