const writeProcessEnv = require('../lib/writeProcessEnv');
const warningMessage = require('../lib/warningMessage');

jest.mock('../lib/warningMessage');

afterEach(() => {
	delete process.env.foo;
	delete process.env.FOO;
});

test('Basic usage', () => {
	writeProcessEnv('foo', 'bar');

	expect(process.env).toHaveProperty('foo', 'bar');
});

test('Force property in upper case', () => {
	writeProcessEnv('foo', 'bar', true);

	expect(process.env).not.toHaveProperty('foo', 'bar');
	expect(process.env).toHaveProperty('FOO', 'bar');
});

test('The type of value is not a string', () => {
	writeProcessEnv('foo', 123);

	expect(warningMessage).toHaveBeenCalledTimes(1);
	expect(process.env).toHaveProperty('foo', '123');
});
