/*
 * Filename: ComplexCode.js
 * Content: A complex and elaborate code sample demonstrating various JavaScript concepts and techniques.
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Function to sort an array of numbers in ascending order
function bubbleSort(arr) {
  const len = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// A helper function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// An asynchronous function to fetch data from an API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Create a new person object
const john = new Person('John Doe', 25);
john.introduce();

// Calculate the factorial of 5
const factorialOf5 = factorial(5);
console.log('Factorial of 5:', factorialOf5);

// Sort an array of numbers
const numbers = [5, 3, 8, 4, 1];
const sortedNumbers = bubbleSort(numbers);
console.log('Sorted numbers:', sortedNumbers);

// Check if a number is prime
const primeNumber = 17;
console.log(`${primeNumber} is prime?`, isPrime(primeNumber));

// Generate a random number between 1 and 10
const randomNum = getRandomNumber(1, 10);
console.log('Random number:', randomNum);

// Fetch data from an API
const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl)
  .then(data => console.log('Fetched data:', data))
  .catch(err => console.error('Error:', err));