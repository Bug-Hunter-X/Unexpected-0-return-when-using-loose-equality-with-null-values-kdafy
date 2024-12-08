# Unexpected 0 return when using loose equality with null values
This JavaScript code demonstrates an unexpected behavior when using loose equality (==) with null values.  The function `foo` returns 0 if either `a` or `b` is null. This is unexpected if the goal is to perform addition and handle nulls differently. The issue stems from the early return statement within the if condition. 

**How to reproduce:**
1. Clone this repository.
2. Run `node bug.js`.

**Solution:**
The solution involves using stricter equality checks (===) to better distinguish between different types of falsy values or using a different logic to handle null inputs.

This example highlights the importance of careful consideration when dealing with loose equality in JavaScript, particularly concerning `null` values and the consequences of immediate returns. 