/*
Binary Search is an efficient algorithm for finding an item from a sorted list of 
items. It works by repeatedly dividing in half the portion of the list that could 
contain the item, until you've narrowed down the possible locations to just one.

The binarySearch() function returns true if the element was found in the array, 
otherwise, it returns false;
*/


const binarySearch = (array, element)=> {
    if (!array || element > array[array.length - 1] || element < array[0]) return false;

    let middle;
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
         middle = Math.floor((left + right) / 2);

         if (array[middle] === element) return true;
         else if (array[middle] < element) {
             left = middle + 1;
         } else {
             right = middle - 1;
         }
    }

    return false;
};
