function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Inputs cannot be null or undefined');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0