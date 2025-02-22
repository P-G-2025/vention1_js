/* ------ Exercise 1 - leapYears
Create a function that determines whether or not a given year is a leap year. 
Leap years are determined by the following rules:

Leap years are years divisible by four (like 1984 and 2004). 
However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
(Yes, it's all pretty confusing)
Hints
use an if statement and && to make sure all the conditions are met properly*/

const leapYears = function() {

};
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false





/* ------ Exercise 2 - Fibonacci
Create a function that returns a specific member of the Fibonacci sequence:

A series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers. In this exercise, 
the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc. 
To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence */


const fibonacci = function() {

};

fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8



/* ------ Exercise 3 - Filter Sting. Arrays
Create a function that takes a list of non-negative integers and strings
 and returns a new list with the strings filtered out.

Example 

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */



/* ------ Exercise 4 - Positive Sum. Arrays
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */




/*  ------ Exercise 5 - Abbreviate. Strings

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
 */


/* ----- Exercise 06 - Reverse a String
Pretty simple, write a function called reverseString that returns its input, reversed!

 
Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. 
do the reversal and then join it back together into a string.*/

const reverseString = function() {

};

reverseString('hello there') // returns 'ereht olleh'


/* Exercise 07 - removeFromArray
Implement a function that takes an array and some other arguments then removes the other arguments from that array:


Hints
The first test on this one is fairly easy, but there are a few things to think about(or google) here for the later tests:

you can manipulate the original array you pass into the function call or create a new array that is returned as the result.
how to remove a single element from an array
how to deal with multiple optional arguments in a javascript function
For more information, check out MDN's page on function arguments - scroll down to the bit about Array.from or the spread operator. You can also check out MDN's page on rest parameters. */
const removeFromArray = function() {

};

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]



/* Task 08: Array Methods
Create a function that takes an array of numbers and returns a new array
where each number is multiplied by its index + 1
Example: [1, 2, 3] should return [1, 4, 9]
*/

// Your solution here
const multiplyByIndex = (arr) => {
    // Write your code here
};

/* Task 09: Object Transformation
Create a function that takes an object of student scores
and returns an object with the same keys but with pass/fail values
(pass if score >= 60)
Example: { John: 80, Jane: 45 } should return { John: 'pass', Jane: 'fail' }
*/

// Your solution here
const getPassFail = (scores) => {
    // Write your code here
};
