import { describe, expect, it } from 'vitest';
import { Stack } from './stack';

describe('Stack', () => {
	it('Should be a Stack instance and have all its properties', () => {
		const stack = new Stack();

		expect(stack).toBeInstanceOf(Stack);
		expect(stack).toHaveProperty('first');
		expect(stack).toHaveProperty('size');
		expect(stack).toHaveProperty('push');
		expect(stack).toHaveProperty('pop');
		expect(stack.getSize).toEqual(0);
	});

	it('Should increment the size property after calling the push function with some value', () => {
		const stack = new Stack<string>();

		stack.push('value for the first node in the stack');

		expect(stack.getSize).toEqual(1);
	});

	it('Should decrement the size property after calling the pop function', () => {
		const stack = new Stack<string>();

		stack.push('last node');
		stack.push('second node');
		stack.push('first node');
		stack.pop();

		expect(stack.getSize).toEqual(2);
	});

	it('Should return the value of the Node that is being removed from the stack after calling the pop function', () => {
		const stack = new Stack<string>();
		const fourthNodeValue = 'fourth node';

		stack.push('last node');
		stack.push('second node');
		stack.push('first node');
		stack.push(fourthNodeValue);

		const removedNodeValue = stack.pop();

		expect(removedNodeValue).toMatch(fourthNodeValue);
	});
});
