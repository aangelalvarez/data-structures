/*
A Stack is a collection of elements that are maintained in a sequence and can be 
modified by the addition of elements at one end of the sequence and the removal 
of elements at that same end.

IMPLEMENTATION USING ARRAYS

> Stack.push(element) to add a new element to the stack

> Stack.pop() to remove the las element added to the stack
*/

let stack = [];

stack.push(2); // [2]
stack.push(0); // [2, 0]
stack.push(10); // [2, 0, 10] 
stack.push(12); // [2, 0, 10, 12]

stack.pop();
//stack is now [2, 0, 10]

stack.pop();
//stack is now [2, 0]