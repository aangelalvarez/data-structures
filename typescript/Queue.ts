/*
A Queue is a collection of elements that are maintained in a sequence and can be 
modified by the addition of elements at one end of the sequence and the removal 
of elements at the other end of the sequence.

IMPLEMENTATION USING ARRAYS

> Queue.unshift(element) adds a new element to the queue (enqueue)(adds to the left end)

> Queue.pop() removes the last element of the queue (dequeue)(removes from the right end)
*/

let queue: unknown[] = [];

queue.unshift(5); //[5]
queue.unshift(3); // [3, 5] 
queue.unshift(10); // [10, 3, 5]

queue.pop();
// queue is now [10, 3]


/*
IMPLEMENTATION USING LINKED LIST

> Queue.enque(element) adds an element to the front of the list (left end)

> Queue.dequeue() removes the last element from the list (right end)

> Queue.get() returns the queue linked list

> Queue.delete() removes the current Queue

> Queue.printQueue() prints the queue
*/

class QueueNode {
    data: unknown
    next: QueueNode | null
    constructor(data?: unknown | null, next?: QueueNode | null){
        this.data = data === undefined ? null : data;
        this.next = next === undefined ? null : next;
    }
}

class QueueLinkedList {
    head: QueueNode | null
    size: number
    constructor(head?: QueueNode | null) {
        this.head = head === undefined ? null : head;
        this.size = 0;
    }


    enqueue(element: unknown): void {
        let node: QueueNode = new QueueNode(element);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }


    dequeue(): QueueNode | null {
        if (!this.head) return null;

        let curr: QueueNode | null = this.head;
        let prev: QueueNode | null = curr;

        if (this.size === 1) {
            this.head = null;
            return curr.data;
        }

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
        this.size--;
        return curr.data;
    }

    printQueue(): null | void {
        if (!this.head) {
            console.log('Queue is empty');
            return null;
        }

        let curr: QueueNode | null = this.head;
        let list: string = "Head -> ";
        while (curr.next) {
            list += `[${curr.data}] -> `;
            curr = curr.next;
        }
        list += `[${curr.data}]`;
        console.log(list);
    }

    get(): QueueNode | null {
        return this.head;
    }

    delete(): void {
        this.head = null;
        this.size = 0;
    }
}