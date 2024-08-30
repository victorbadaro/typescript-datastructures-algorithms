import { describe, expect, it } from 'vitest';
import { Node } from './node';

describe('Node', () => {
	it('Should be a Node instance and have all its properties', () => {
		const node = new Node('test');

		expect(node).toBeInstanceOf(Node);
		expect(node).toHaveProperty('value');
		expect(node).toHaveProperty('next');
		expect(node).toHaveProperty('getValue');
		expect(node).toHaveProperty('getNext');
		expect(node).toHaveProperty('setNext');
	});

	it('Should return the inital value when the getValue function is called', () => {
		const initialValue = 'some value';
		const node = new Node(initialValue);

		expect(node.getValue).toMatch(initialValue);
	});

	it('Should return null when the getNext function is called right after initializing the object', () => {
		const node = new Node('another value');

		expect(node.getNext).toBeNull();
	});

	it('Should change the next attribute after calling the setNext function passing a new node', () => {
		const node = new Node('initial value');
		const nextNode = new Node('initial value for the new node');

		node.setNext = nextNode;

		expect(node.getNext).not.toBeNull();
		expect(node.getNext).toBe(nextNode);
	});
});
