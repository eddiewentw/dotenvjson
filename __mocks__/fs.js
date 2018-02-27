const fs = jest.genMockFromModule('fs');
const envJson = require('./env.js');

fs.readFileSync = () => JSON.stringify(envJson);

module.exports = fs;
