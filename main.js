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

// 11- get the factorial of a given number
function factorial(num) {
  let result = 1;
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  } else if (num === 0) {
    return 1;
  } else {
    return "please enter a non-negative number";
  }
  return result;
}

// 12- return the sum of all positive integers of an array
let sumThePositive = (arr) =>
  arr.filter((e) => e > 0).reduce((acc, curr) => acc + curr);

// 13- return the second largest integer in array
function secondBig(arr) {
  let nums = arr.filter((e) => e > 0).sort((a, b) => a - b);
  return nums[nums.length - 2];
}

// 14- return the first non repeated char in a string
function nonRepeated(str) {
  if (str == "") {
    return "string is empty";
  }
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return "All characters are repeated";
}

// 15- return the longest string in array
function getLongest(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  return arr.reduce((acc, curr) => (curr.length > acc.length ? curr : acc), "");
}

// 16- check if two words are anagrams
function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return "Not anagrams";
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("")
    ? "Anagrams"
    : "Not anagrams";
}

// 17- remove duplicates from an array
let removeDuplicates = (arr) => [...new Set(arr)];

// 18- return new arr with even nums replaced by their half and odd nums with their double
let oddEven = (arr) => arr.map((e) => (e % 2 === 0 ? e / 2 : e * 2));

// 19- return number of words in a string
let wordsNum = (str) => str.trim().split(" ").length;

// 20- return the square of a number
let numSquare = (num) => num * num;
