# JavaScript Function's Unexpected NaN Result

This repository demonstrates a common yet subtle bug in JavaScript functions where undefined inputs lead to NaN results.

## Bug Description
The `foo` function is designed to add two numbers, handling null inputs gracefully. However, it fails to handle undefined inputs appropriately, resulting in NaN (Not a Number) as the output.  This is due to the automatic type coercion in JavaScript.

## Bug Solution
The solution involves explicitly checking for both null and undefined values, and handling them by returning a suitable default value or throwing an error, thereby preventing NaN from being generated.