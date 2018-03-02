const writeProcessEnv = require('../lib/writeProcessEnv');

const mockConfig = {
	path: '/does-not-matter',
	inUpperCase: true,
};

jest.mock('fs');
jest.mock('../lib/writeProcessEnv');

describe('loadEnvConfigJson()', () => {
	afterEach(() => {
		writeProcessEnv.mockClear();
	});

	test('Variables are in upper case', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => mockConfig));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(writeProcessEnv).toHaveBeenCalledTimes(3);

		expect(writeProcessEnv).toHaveBeenCalledWith('user', 'eddie', true);
		expect(writeProcessEnv).toHaveBeenCalledWith('password', 'hello-world', true);
		expect(writeProcessEnv).toHaveBeenCalledWith('foo', 123, true);
	});

	test('Don\'t force variables to be upper case', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => ({
			...mockConfig,
			inUpperCase: false,
		})));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(writeProcessEnv).toHaveBeenCalledTimes(3);

		expect(writeProcessEnv).toHaveBeenCalledWith('user', 'eddie', true);
		expect(writeProcessEnv).toHaveBeenCalledWith('password', 'hello-world', true);
		expect(writeProcessEnv).toHaveBeenCalledWith('foo', 123, true);
	});

	test('Existed property should not be changed', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => mockConfig));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(writeProcessEnv).not.toHaveBeenCalledWith('NODE_ENV', 'should-not-be-replaced', true);
	});
});
