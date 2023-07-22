console.log('apple' === 'apple'); // true
// @ts-expect-error
console.log('apple' !== 'orange'); // true
// @ts-expect-error
console.log('apple' === 'orange'); // false
console.log('apple' !== 'apple'); // false

// Tests using the lower case function
console.log('APPLE'.toLowerCase() === 'apple'); // true
console.log('APPLE'.toLowerCase() !== 'orange'); // true
console.log('APPLE'.toLowerCase() === 'orange'); // false
console.log('APPLE'.toLowerCase() !== 'apple'); // false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5); // true
// @ts-expect-error
console.log(5 !== 4); // true
console.log(5 > 4); // true
console.log(5 < 6); // true
console.log(5 >= 5); // true
console.log(5 <= 6); // true
// @ts-expect-error
console.log(5 === 4); // false
console.log(5 !== 5); // false
console.log(5 > 6); // false
console.log(5 < 4); // false
console.log(5 >= 6); // false
console.log(5 <= 4); // false

// Tests using "and" and "or" operators
console.log(5 > 4 && 6 > 5); // true
console.log(5 > 4 || 6 < 5); // true
console.log(5 > 6 && 6 > 5); // false
console.log(5 > 6 || 6 < 5); // false

// Test whether an item is in a array
const fruits = ['apple', 'orange', 'banana'];
console.log(fruits.indexOf('apple')); // true

// Test whether an item is not in a array
console.log(!fruits.indexOf('pear')); // true

// Test whether an item is in an array
const fruits1 = ['apple', 'orange', 'banana'];
console.log(fruits.indexOf('apple') !== -1); // true

// Test whether an item is not in an array
console.log(fruits1.indexOf('pear') === -1); // true
