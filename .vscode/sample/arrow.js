// a. Print odd numbers in an array

let numbers = [21,32,43,56,78,90,10,12];
var oddnumbers = numbers.filter((number) => {
  return number % 2;
});
console.log(oddnumbers);

// b. Convert all the strings to title caps in a string array

var title = "welcome to the world";
const value1 = title.toLowerCase().split(' ').map((word) => {
   return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
console.log(value1);

// c. Sum of all numbers in an array

let number = [20,12,11,32,45,17];
const result = number.reduce((accumlator,currentvalue) => {
  return accumlator + currentvalue;
});
console.log(result);

// d. Return all the prime numbers in an array

var value = [11,12,13,14,15,16,17,18,19,10];
  const filterdvalues = value.filter((num) => {
    for(let i = 2; i<num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
      return num > 1;
  });
  console.log(filterdvalues);

// e. Return all the palindromes in an array

var names = ["malayalam","apple","banana","level","ada"];
    const result1 = names.filter ((returnValues) => {
        return returnValues === returnValues.split('').reverse().join('');
    });
    console.log(result1);
