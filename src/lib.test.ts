import {inc} from '@/lib.service.js';

describe('lib', () => {
	test('inc', () => {
		expect(inc(1)).toBe(2);
	});
});
