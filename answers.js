//Question one Fizbuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//Question 2: Fibonacci Sequence
function generateFibonacciUpToN(n) {
  let a = 0,
    b = 1,
    nextTerm;

  console.log(a);
  while (b <= n) {
    console.log(b);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
}

generateFibonacciUpToN(100);

//Question 3: Power of Two
function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// Examples
console.log(isPowerOfTwo(8)); // returns true
console.log(isPowerOfTwo(6)); // returns false

//Question 4: Capitalize Words
function capitalizeWords(input) {
  // Spliting the input string into an array of words
  let words = input.split(" ");

  // Mapping through each word, capitalize the first letter, and join the rest of the word
  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Joining the capitalized words back into a single string
  return capitalizedWords.join(" ");
}

// Examples
console.log(capitalizeWords("hi"));
console.log(capitalizeWords("i love programming"));

//Question 5: Reverse Integer
function reverseInteger(num) {
  // Checking if the number is negative
  let isNegative = num < 0;

  // Converting the number to a string and remove the sign if negative
  let numStr = Math.abs(num).toString();

  // Reversing the digits
  let reversedStr = numStr.split("").reverse().join("");

  // Converting the reversed string back to an integer
  let reversedNum = parseInt(reversedStr, 10);

  // Returning the reversed number with the correct sign
  return isNegative ? -reversedNum : reversedNum;
}

// Examples
console.log(reverseInteger(500));
console.log(reverseInteger(-56));
console.log(reverseInteger(-90));
console.log(reverseInteger(91));

//Question 6: Count Vowels
function countVowels(sentence) {
  // Defining the vowels
  const vowels = "aeiouAEIOU";

  // Initializing a counter for vowels
  let count = 0;

  // Iterating through each character in the sentence
  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  // Returning the total count of vowels
  return count;
}

// Example usage
console.log(countVowels("Hello World"));
