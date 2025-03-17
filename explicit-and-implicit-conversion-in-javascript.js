/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result); // I think that this code is reading the right way and doesn't need adjusted

let isValid = Boolean(null);
if (isValid)  {
    console.log("This is valid!"); 
}                                     // Changed the "false" to null, as even though it said "false" it was still running as if true

let age = "25";
let totalAge = age + 5;
let num = 30;
console.log("Total Age: " + num);   // age + 5 was 30, so I added the let num, and then added num in the console.log


// Implicit

secondAge = 25;
console.log("You are ${secondAge} years old.");

// Explicit 

let bool = true;
console.log(bool.toString(true));

console.log("This is a practice line, it's not letting me commit my code.")
