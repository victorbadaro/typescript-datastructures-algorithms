export class Node<T> {
	private value: T;
	private next: Node<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}

	public get getValue(): T {
		return this.value;
	}

	public get getNext(): Node<T> | null {
		return this.next;
	}

	public set setNext(next: Node<T>) {
		this.next = next;
	}
}
