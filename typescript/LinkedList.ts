/*
A Linked List is a linear collection of data elements whose order is not given 
by their physical placement in memory. Instead, each element points to the next. 
It is a data structure consisting of a collection of nodes which together 
represent a sequence.

IMPLEMENTATION

>list.add(element) adds a new element to the list, if the head is empty,
then the element becomes the head

> list.remove() removes the last element of the list

> list.insertAt(index, element) inserts an element at a certain index

> list.removeAt(index, element) removes an element at a certain index

> list.removeElement(element) removes the first instance of an element from the list

> list.indexOf(element) returns the index of a certain element

> list.isEmpty() returns true if the list has no items, otherwise, it returns false

> list.length() returns the lenght of the list

> list.printList() prints the elements in the list

> list.get() returns the linked list

> list.delete() deletes the linked list

> list.search(element) searchs for an element in the list, returns true if found,
  otherwise, it returns false
*/




class ListNode {
    data: unknown | null;
    next: ListNode | null;
    constructor(data?: unknown | null, next?: ListNode | null) {
        this.data = data === undefined ? null : data;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    head: ListNode | null;
    size: number;
    constructor(head?: ListNode | null) {
        this.head = head === undefined ? null : head;
        this.size = 0;
    }

    
    add(element: unknown): void {
        let node: ListNode = new ListNode(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let curr: ListNode = this.head;
        
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }

        this.size++;
    }
    

    remove(): unknown {
        if (!this.head) return null;
        
        let curr: ListNode | null = this.head;
        let prev: ListNode | null = curr;

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


    insertAt(index: number, element: unknown): void | null {
        if (index < 0 || index > this.size) {
            console.log(`Index ${index} is not a valid index`);
            return null;
        }               
        let node: ListNode = new ListNode(element);
        let curr: ListNode | null = this.head;
        let prev: ListNode | null = curr;

        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            for (let i = 0; i < index; i++) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = node;
            node.next = curr;
        }

        this.size++;
        
    }


    removeAt(index: number): unknown | null {
        if (index < 0 || index > this.size - 1  || !this.head) {
            console.log(`Index ${index} is not a valid index`);
            return null;
        }       
        let curr: ListNode | null = this.head;
        let prev: ListNode | null = curr;

        if (index === 0) {
            this.head = curr.next; 
        } else {
            for (let i = 0; i < index; i++) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = curr.next;
        }
        this.size--;
        return curr.data;
    }


    removeElement(element: unknown): void | null | unknown {
        if (!this.head) return null;

        let curr: ListNode | null = this.head;
        let prev: ListNode | null = curr;

        if (curr.data === element) {
            this.head = curr.next;
            this.size--;
            return curr.data;
        }

        while (curr) {
            if (curr.data === element) {
                prev.next = curr.next;
                this.size--;
                return curr.data;
            }
            
            prev = curr;
            curr = curr === null ? null : curr.next;
        }
    }


    indexOf(element: ListNode): void | number | null {
        if (!this.head) return null;

        let curr: ListNode | null = this.head;
        let count: number = 0;

        while (curr) {
            if (curr.data === element) {
                return count;
            }
            count++;
            curr = curr.next;
        }
        console.log(`${element} was not found in the list`);
    }


    search(element: unknown): boolean {
        if (!this.head) {
            console.log(`${element} was not found`);
            return false;
        }

        let curr = this.head;
        let count = 0;

        while(curr) {
            if (curr.data === element) {
                console.log(`${curr.data} found at index ${count}`);
                return true;
            }
            curr = curr.next;
            count++;
        }

        console.log(`${element} was not found`);
        return false;
    }



    isEmpty(): boolean {
        return this.size === 0;
    }

    length(): number {
        return this.size;
    }

    get(): null | ListNode {
        return this.head;
    }

    printList(): void | null {
        if (!this.head) {
            console.log('[]');
            return null;
        }

        let curr: ListNode | null = this.head;
        let list: string = 'Head -> ';
        
        while (curr.next) {
            list += `[${curr.data}] -> `;
            curr = curr.next;
        }
        list += `[${curr.data}]`;
        console.log(list);
    }

    delete(): void {
        this.head = null;
        this.size = 0;
    }
}

