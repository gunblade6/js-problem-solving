// I GET CODING CHALLENGES FROM (CHAT GPT) EVERYDAY AND SOLVE THEM HERE

// 1- sum of two numbers
let sumTwo = (one, two) => one + two;

// 2- sum of all numbers in an array
let sumArray = (arr) => arr.reduce((acc, curr) => acc + curr);

// 3- average of numbers in array
let average = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;

// 4- return string length
let strLen = (str) => str.length;

// 5- number of vowels in a string
function vowelCount(str) {
  let count = 0;
  let vowels = ["a", "e", "o", "i", "u"];
  str.split("").forEach((e) => {
    vowels.includes(e) ? count++ : count;
  });
  return count;
}
/*
best practise
function vowelCount(str) {
  const vowels = /[aeiou]/gi;
  const matches = str.match(vowels);
  return matches ? matches.length : 0;
}
*/

// 6- reverse a string
let reverseChars = (str) => str.split("").reverse().join("");

// 7- capitalize strings in an array of strings
function capitalize(arr) {
  return arr.map((e) => {
    return e.slice(0, 1).toUpperCase() + e.slice(1);
  });
}

// 8- return only even numbers from an array
let evenOnly = (arr) => arr.filter((e) => e % 2 === 0);

// 9- return true if the number is even, false otherwise
let evenOrNot = (num) => (num % 2 === 0 ? true : false);

// 10- return true if the first number greater than the second number and false otherwise
let greatOrNot = (first, second) => (first > second ? true : false);
