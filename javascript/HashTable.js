/*
A Hash Table is a data structure that maps keys to values. Hash tables combine 
lookup, insert, and delete operations in an efficient way. The key is sent to 
a hash function that performs arithmetic operations on it. The result 
(called the hash value or hash) is an index of the key-value pair

IMPLEMENTATION WITH CHAINING (takes care of collisions)

The hash function works using this.hash as a reference, this.hash is the total 
amount of keys used to store the data, the default value is 2 (keys 0 and 1), 
however, it can be modified by passing an integer as argument while creating 
a new HashTable instance
The keys are computed by getting the remainder of the current element divided by 
this.hash using the % operator
The HashTable supports 3 data types: numbers, strings, and booleans

> computeHash() computes the key in which the value will be stored

> add(element) adds a new element to the Hash Table

> remove(element) removes the first instance of an element

> search(element) returns true if an element was found in the Hash Table,
  otherwise, it returns false

> printTable() prints the Hash Table

> sizeOf() returns the total amount of items in the Hash Table
*/

class TableNode {
    constructor(data, next) {
        this.data = data === undefined ? null : data;
        this.next = next === undefined ? null : next;
    }
}

class HashTable {
    constructor(hash) {
        this.size = 0;
        this.hash = hash === undefined ? 2 : hash;
        this.table = [];
    }


    computeHash(element) {
        let key;
        
        switch (typeof(element)) {
            case 'number':
                key = element % this.hash;
                break;
            case 'string':
                key = element.length % this.hash;
                break;
            case 'boolean':
                key = element === true ? 1 : 0;
                break;
            default:
                key = 0;
        }
        return key;
    } 


    add(element) {
        let key = this.computeHash(element);
        let node = new TableNode(element);

        if (!this.table[key]) {
           this.table[key] = node;
        } else {
            let curr = this.table[key];

            while (curr.next) {
                curr = curr.next;
            }

            curr.next = node;
        }  

        this.size++;
    } 


    remove(element) {
        let key = this.computeHash(element);

        if (!this.table[key]) return null;

        let curr = this.table[key];
        let prev = curr;

        if (curr.data === element) {
            this.table[key] = curr.next;
            this.size--;
            return curr.data;
        }

        while(curr) {
            if (curr.data === element) {
                prev.next = curr.next;
                this.size--;
                return curr.data;
            }
            prev = curr;
            curr = curr === null ? null : curr.next;
        }
        return null;
    }


    search(element) {
        let key = this.computeHash(element);

        if (!this.table[key]) {
            console.log(`${element} was not found`);
            return false;
        }

        let curr = this.table[key];
        let count = 0;

        while(curr) {
            if (curr.data === element) {
                console.log(`${curr.data} was found at key = ${key}, index = ${count}`);
                return true;
            }
            curr = curr.next;
            count++;
        }

        console.log(`${element} was not found`);
        return false;
    }


    sizeOf() {
        return this.size;
    }


    printTable() {
        if (this.size === 0) {
            console.log('Hash Table is empty');
            return null;
        }
        let key = 0;
        let table = "";
        for (let i = 0; i < this.hash; i++) {
            let curr = this.table[key];
            table += `Key[${key}] = `;

            if (!this.table[key]) {
                table += '[]\n';
            } else {
                while (curr.next) {
                    table += `[${curr.data}] -> `;
                    curr = curr.next;
                }
                table += `[${curr.data}] \n`;

            }
            key++;
        }

        console.log(table);
    }
}