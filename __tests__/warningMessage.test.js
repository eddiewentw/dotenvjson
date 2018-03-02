const warningMessage = require('../lib/warningMessage');

console.log = jest.fn();

test('warningMessage()', () => {
	warningMessage('test');

	expect(console.log).toHaveBeenCalledTimes(1);
});
