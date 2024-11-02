import { defineConfig } from 'vite';

// Example function to demonstrate unit testing
export function add(a: number, b: number): number {
  return a + b;
}

// Example function to demonstrate unit testing
export function subtract(a: number, b: number): number {
  return a - b;
}

// Example function to demonstrate unit testing
export function multiply(a: number, b: number): number {
  return a * b;
}

// Example function to demonstrate unit testing
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// Example function to demonstrate unit testing
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Example function to demonstrate unit testing
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

// Example function to demonstrate unit testing
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Example function to demonstrate unit testing
export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example function to demonstrate unit testing
export function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Example function to demonstrate unit testing
export function gcd(a: number, b: number): number {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

// Example function to demonstrate unit testing
export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b);
}

// Example function to demonstrate unit testing
export function power(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

// Example function to demonstrate unit testing
export function squareRoot(num: number): number {
  if (num < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  return Math.sqrt(num);
}

// Example function to demonstrate unit testing
export function cubeRoot(num: number): number {
  return Math.cbrt(num);
}

// Example function to demonstrate unit testing
export function absoluteValue(num: number): number {
  return Math.abs(num);
}

// Example function to demonstrate unit testing
export function round(num: number): number {
  return Math.round(num);
}

// Example function to demonstrate unit testing
export function ceil(num: number): number {
  return Math.ceil(num);
}

// Example function to demonstrate unit testing
export function floor(num: number): number {
  return Math.floor(num);
}

// Example function to demonstrate unit testing
export function max(...nums: number[]): number {
  return Math.max(...nums);
}

// Example function to demonstrate unit testing
export function min(...nums: number[]): number {
  return Math.min(...nums);
}

// Example function to demonstrate unit testing
export function sum(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

// Example function to demonstrate unit testing
export function average(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  return sum(...nums) / nums.length;
}

// Example function to demonstrate unit testing
export function median(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const sorted = nums.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

// Example function to demonstrate unit testing
export function mode(...nums: number[]): number[] {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const frequency: { [key: number]: number } = {};
  nums.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  const maxFrequency = Math.max(...Object.values(frequency));
  return Object.keys(frequency)
    .filter((key) => frequency[Number(key)] === maxFrequency)
    .map(Number);
}

// Example function to demonstrate unit testing
export function range(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  return max(...nums) - min(...nums);
}

// Example function to demonstrate unit testing
export function variance(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const avg = average(...nums);
  return nums.reduce((acc, curr) => acc + (curr - avg) ** 2, 0) / nums.length;
}

// Example function to demonstrate unit testing
export function standardDeviation(...nums: number[]): number {
  return Math.sqrt(variance(...nums));
}

// Example function to demonstrate unit testing
export function factorialIterative(n: number): number {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Example function to demonstrate unit testing
export function fibonacciIterative(n: number): number {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Example function to demonstrate unit testing
export function isPrimeOptimized(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example function to demonstrate unit testing
export function gcdIterative(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Example function to demonstrate unit testing
export function lcmIterative(a: number, b: number): number {
  return (a * b) / gcdIterative(a, b);
}

// Example function to demonstrate unit testing
export function powerIterative(base: number, exponent: number): number {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

// Example function to demonstrate unit testing
export function squareRootIterative(num: number): number {
  if (num < 0) {
    throw new Error('Negative numbers are not allowed');
  }
  let guess = num / 2;
  let prevGuess;
  do {
    prevGuess = guess;
    guess = (guess + num / guess) / 2;
  } while (guess !== prevGuess);
  return guess;
}

// Example function to demonstrate unit testing
export function cubeRootIterative(num: number): number {
  let guess = num / 3;
  let prevGuess;
  do {
    prevGuess = guess;
    guess = (2 * guess + num / (guess * guess)) / 3;
  } while (guess !== prevGuess);
  return guess;
}

// Example function to demonstrate unit testing
export function absoluteValueIterative(num: number): number {
  return num < 0 ? -num : num;
}

// Example function to demonstrate unit testing
export function roundIterative(num: number): number {
  return num - Math.floor(num) < 0.5 ? Math.floor(num) : Math.ceil(num);
}

// Example function to demonstrate unit testing
export function ceilIterative(num: number): number {
  return num % 1 === 0 ? num : Math.floor(num) + 1;
}

// Example function to demonstrate unit testing
export function floorIterative(num: number): number {
  return num % 1 === 0 ? num : Math.floor(num);
}

// Example function to demonstrate unit testing
export function maxIterative(...nums: number[]): number {
  let maxNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i];
    }
  }
  return maxNum;
}

// Example function to demonstrate unit testing
export function minIterative(...nums: number[]): number {
  let minNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  return minNum;
}

// Example function to demonstrate unit testing
export function sumIterative(...nums: number[]): number {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

// Example function to demonstrate unit testing
export function averageIterative(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  return sumIterative(...nums) / nums.length;
}

// Example function to demonstrate unit testing
export function medianIterative(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const sorted = nums.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

// Example function to demonstrate unit testing
export function modeIterative(...nums: number[]): number[] {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const frequency: { [key: number]: number } = {};
  nums.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });
  const maxFrequency = Math.max(...Object.values(frequency));
  return Object.keys(frequency)
    .filter((key) => frequency[Number(key)] === maxFrequency)
    .map(Number);
}

// Example function to demonstrate unit testing
export function rangeIterative(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  return maxIterative(...nums) - minIterative(...nums);
}

// Example function to demonstrate unit testing
export function varianceIterative(...nums: number[]): number {
  if (nums.length === 0) {
    throw new Error('No numbers provided');
  }
  const avg = averageIterative(...nums);
  return nums.reduce((acc, curr) => acc + (curr - avg) ** 2, 0) / nums.length;
}

// Example function to demonstrate unit testing
export function standardDeviationIterative(...nums: number[]): number {
  return Math.sqrt(varianceIterative(...nums));
}
