import {inc} from '@/lib.service.js';

export const print = () => {
	console.log('Hello world!', inc(1));
};
