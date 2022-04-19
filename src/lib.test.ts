import {inc} from '@/lib.js';

describe('lib', () => {
	test('inc', () => {
		expect(inc(1)).toBe(2);
	});
});
