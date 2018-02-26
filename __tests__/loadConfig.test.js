const path = require('path');
const loadConfig = require('../lib/loadConfig');

test('Doesn\'t pass any options.', () => {
	expect(loadConfig()).toMatchObject({
		path: path.join(__dirname, '..', '.env.json'),
		inUpperCase: true,
	});
});

test('Pass an empty object', () => {
	expect(loadConfig({})).toMatchObject({
		path: path.join(__dirname, '..', '.env.json'),
		inUpperCase: true,
	});
});

test('Pass options object with legal and illegal properties', () => {
	const customePath = '/foo/config.json';

	expect(
		loadConfig({
			path: customePath,
			foo: 'bar',
		}),
	).toMatchObject({
		path: customePath,
		inUpperCase: true,
	});
});
