/*
Bit manipulation is the act of algorithmically manipulating bits or other pieces 
of data shorter than a word. Computer programming tasks that require bit 
manipulation include low-level device control, error detection and correction 
algorithms, data compression, encryption algorithms, and optimization.


BIT OPERATORS IN JAVASCRIPT

----------------------------------------------------------------------------------------------------

Operator   Name                        Description                                           

&          AND                         Only true if both input bits are true    

|          OR                          True if any input bit is true

^          XOR                         True if one and only one input bit is true

~          NOT                         Flips the input bit

<<         ZERO FILL LEFT SHIFT        Shifts left by n, n zeroes are pushed in from the right

>>         SIGNED RIGHT SHIFT          Shifts right by pushing copies of the leftmost bit by n   

>>>        ZERO FILL RIGHT SHIFT       Shifts right by n, n zeroes are pushed in from the left

----------------------------------------------------------------------------------------------------


OPERATOR EXAMPLES

0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

~0 = 1
~1 = 0

010 << 001 = 100

010 >> 001 = 001

010 >>> 001 = 001


EXTRA FACTS

The operator >> preserves the sign at the leftmost bit

5 << 3 is the same as 5 * 2^3      00000101 << 00000011 is the same as 00101000
5 << 1 is the same as 5 * 2^1      00000101 << 00000001 is the same as 00001010

5 >>> 3 is the same as 5 / 2^3     00000101 >>> 00000011 is the same as 00000000
5 >>> 1 is the same as 5 / 2^1     00000101 >>> 00000001 is the same as 00000010
5 >>> 1 is actually 2, not 2.5, the result is rounded towards negative infinity


ONE'S COMPLEMENT
A way to represent negative binary number
In order to get a negative binary number using one's complement, we flip every bit

Using one's complement:
16 is equal to 10000
-16 is equal to 01111
127 is equal to 01111111
-127 is equal to 10000000

TWO'S COMPLEMENT
A way to represent a negative binary number
In order to get a negative binary number using two's complement, we first flip every bit, we 
then add 1 to the result
Using two's complement:

16 is equal to 10000
-16 is equal to 01111 + 1 = 10000
127 is equal to 01111111
-127 is equal to 10000000 + 1 = 10000001

*/



// SOME BIT MANIPULATION ALGORITHMS


// SET BIT
// Sets a specifit bit to 1 (true)
// setBit(0b00000110, 0b00000101) returns 38 (0b00100110)
// setBit(6, 5) returns 38
const setBit = (n: number, position: number): number => {
    let mask: number = 1 << position;
    return n | mask;
};

// CLEAR BIT
// Sets a specific bit to 0 (false)
// clearBit(0b00000110, 0b00000010) returns 2 (0b00000010)
// clearBit(6, 2) returns 2 (0b00000010)
const clearBit = (n: number, position: number): number => {
     let mask: number = 1 << position;
     return n & ~mask;
};

// FLIP BIT
// Flips the value of a specific bit
// flipBit(0b01100110, 0b00000010) returns 98 (0b01100010)
// flipBit(102, 2) returns 98 (0b01100010)
const flipBit = (n: number, position: number): number => {
    let mask: number = 1 << position;
    return n ^ mask;
};

// IS BIT SET
// Returns true if a bit is true, otherwise, it returns false
// isBitSet(0b01100110, 0b00000101) returns true
// isBitSet(102, 5) returns true
const isBitSet = (n: number, position: number): boolean => {
    let shifted: number = n >> position;
    return ((shifted & 1) === 1 ? true : false);
};

// MODIFY BIT
// Sets a specific bit to either 1 or 0 (depending on the state parameter)
// modifyBit(0b00000110, 0b00000101, 0b00000001) returns 38 (0b00100110)
// modifyBit(6, 5, 1) returns 38
const modifyBit = (n: number, position: number, state: number): number => {
    let mask: number = 1 << position;
    return (n & ~mask) | (-state & mask); 
};

// IS EVEN
// Checks if the bits represent an even number
// isEven(0b00000110) returns true
// isEven(6) returns true
const isEven = (n: number): boolean => {
    return ((n & 1) === 0 ? true : false);
};

// IS POWER OF TWO
// Checks if the bits are a power of two
// isPowerOfTwo(00000100) returns true
// isPowerOfTwo(4) returns true
const isPowerOfTwo = (n: number): boolean => {
    return ((n & n - 1) === 0 ? true : false);
};

// ROUND UP TO THE NEXT POWER OF TWO
// Rounds up a number to the next power of two
// roundUpToNextPowTwo(0b10001) returns 32 (0b100000)
// roundUpToNextPowTwo(17) returns 32
const roundUpToNextPowTwo = (n: number): number => {
    n--;
    n |= n >> 1;  // handle  2 bit numbers
    n |= n >> 2;  // handle  4 bit numbers
    n |= n >> 4;  // handle  8 bit numbers
    n |= n >> 8;  // handle  16 bit numbers
    n |= n >> 16;  // handle  32 bit numbers
    n++;
    
    return n;
};

// SWAP VALUE
// Swaps the values of two integers
// swap(2, 4) turns the 2 into 4, and the 4 into 2
// swap(0b10, 0b100) turns the 0b10 into 4, and the 0b100 into 2
const swap = (a: number, b: number): void => {
    a ^= b;
    b ^= a;
    a ^= b;
};

// SIGN OF BITS
// It returns 1 if the bits represent a positive number, otherwise, it returns 0
// sign(-4) returns 0
// sign(0b100) returns 1
const sign = (n: number): number => {
    n >>>= 31;
    return n ^ 1;
};

// ABSOLUTE VALUE 
// Computes the absolute value of a number
// absVal(-100) returns 100
// absVal(0b100) returns 4
const absVal= (n: number): number => {
    const bit31: number = n >> 31;
    return ((n ^ bit31) - bit31);
};

// DECIMAL TO BINARY
// Converts a decimal number into binary
// decToBin(8) returns 1000
// The >>> 0 operator has no effect in the number but give you the binary equivalent
const decToBin = (decimal: number): string => {
    return ('0b' + (decimal >>> 0).toString(2)); 
};

// BINARY TO DECIMAL
// Converts a binary number into decimal
// binToDec(0b1000) returns 8
const binToDec = (binary: number): number => {
    const bin: string = binary.toString(2);
    return (parseInt(bin, 2));
};

// DECIMAL TO HEXADECIMAL
// Converts a decimal number into hexadecimal
// decToHex(8) returns 0x8
const decToHex = (decimal: number): string => {
    return('0x' + decimal.toString(16));
};

// HEXADECIMAL TO DECIMAL
// Converts a hexadecimal number into decimal
// hexToDec(0x8) returns 8
const hexToDec = (hexadecimal: number): number => {
    let hex: string =  hexadecimal.toString(16);
    return (parseInt(hex, 16));
};
