const mockConfig = {
	path: '/does-not-matter',
	inUpperCase: true,
};

jest.mock('fs');

describe('loadEnvConfigJson()', () => {
	afterEach(() => {
		delete process.env.USER;
		delete process.env.PASSWORD;
		delete process.env.FOO;
		delete process.env.user;
		delete process.env.password;
		delete process.env.foo;

		jest.resetModules();
	});

	test('Variables are in upper case', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => mockConfig));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(process.env).toHaveProperty('USER', 'eddie');
		expect(process.env).toHaveProperty('PASSWORD', 'hello-world');
		expect(process.env).toHaveProperty('FOO', '123');
	});

	test('Don\'t force variables to be upper case', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => ({
			...mockConfig,
			inUpperCase: false,
		})));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(process.env).toHaveProperty('user', 'eddie');
		expect(process.env).toHaveProperty('password', 'hello-world');
		expect(process.env).toHaveProperty('foo', '123');
	});

	test('Existed property should not be changed', () => {
		jest.doMock('../lib/loadConfig', () => jest.fn(() => mockConfig));
		/* eslint-disable global-require */
		require('../lib/index')();
		/* eslint-enable global-require */

		expect(process.env).toHaveProperty('NODE_ENV', 'test');
	});
});
