function foo(a, b) {
  let result = 0;
  if (a !== null && b !== null) {
    result = a + b;
  } else if (a === null && b === null){
    result = 0; // Handle both null case
  } else if (a === null) {
    result = b; //Handle the case only a is null
  } else {
    result = a; //Handle the case only b is null
  }
  return result;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: 0