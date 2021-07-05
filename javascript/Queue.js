/*
A Queue is a collection of elements that are maintained in a sequence and can be 
modified by the addition of elements at one end of the sequence and the removal 
of elements at the other end of the sequence.

IMPLEMENTATION USING ARRAYS

> Queue.unshift(element) adds a new element to the queue (enqueue)(adds to the left end)

> Queue.pop() removes the last element of the queue (dequeue)(removes from the right end)

> Queue.printQueue() prints the queue
*/

let queue = [];

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
*/

class QueueNode {
    constructor(data, next){
        this.data = data === undefined ? null : data;
        this.next = next === undefined ? null : next;
    }
}

class QueueLinkedList {
    constructor(head) {
        this.head = head === undefined ? null : head;
        this.size = 0;
    }


    enqueue(element) {
        let node = new QueueNode(element);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }


    dequeue() {
        if (!this.head) return null;

        let curr = this.head;
        let prev = curr;

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


    printQueue() {
        if (!this.head) {
            console.log('[]');
            return null;
        }

        let curr = this.head;
        let list = "Head -> ";
        while (curr.next) {
            list += `[${curr.data}] -> `;
            curr = curr.next;
        }
        list += `[${curr.data}]`;
        console.log(list);
    }


    get() {
        return this.head;
    }


    delete() {
        this.head = null;
        this.size = 0;
    }
}