import { Node } from './node';

export class Stack<T> {
	private first: Node<T> | null;
	private size: number;

	constructor() {
		this.first = null;
		this.size = 0;
	}

	public push(value: T): number {
		const newNode = new Node<T>(value);

		if (this.first) {
			newNode.setNext = this.first;
		}

		this.first = newNode;
		this.size++;

		return this.size;
	}

	public pop(): T | null {
		if (!this.first) {
			return null;
		}

		const nodeToBeRemoved = this.first;

		this.first = nodeToBeRemoved.getNext;
		this.size--;

		return nodeToBeRemoved.getValue;
	}
}
