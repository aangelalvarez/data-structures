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
    constructor(data, next) {
        this.data = data === undefined ? null : data;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head === undefined ? null : head;
        this.size = 0;
    }

    
    add(element) {
        let node = new ListNode(element);

        if (this.head === null) {
            this.head = node;
            
        } else {
            let curr = this.head;
        
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }

        this.size++;
    }
    

    remove() {
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


    insertAt(index, element) {
        if (index < 0 || index > this.size) {
            console.log(`Index ${index} is not a valid index`);
            return null;
        }        
        let node = new ListNode(element);
        let curr = this.head;
        let prev = curr;

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


    removeAt(index) {
        if (index < 0 || index > this.size - 1 || !this.head) {
            console.log(`Index ${index} is not a valid index`);
            return null;
        }       
        let curr = this.head;
        let prev = curr;

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


    removeElement(element) {
        if (!this.head) return null;

        let curr = this.head;
        let prev = curr;

        if (curr.data === element) {
            this.head = curr.next;
            this.size--;
            return curr.data
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


    indexOf(element) {
        if (!this.head) return null;

        let curr = this.head;
        let count = 0;

        while (curr) {
            if (curr.data === element) {
                return count;
            }
            count++;
            curr = curr.next;
        }
        console.log(`${element} was not found in the list`);
    }


    search(element) {
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



    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }

    get() {
        return this.head;
    }

    printList() {
        if (!this.head) {
            console.log('[]');
            return null;
        }

        let curr = this.head;
        let list = 'Head -> ';
        
        while (curr.next) {
            list += `[${curr.data}] -> `;
            curr = curr.next;
        }
        list += `[${curr.data}]`;
        console.log(list);
    }

    delete() {
        this.head = null;
        this.size = 0;
    }
}

