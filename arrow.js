// a. Print odd numbers in an array

let numbers = [21,32,43,56,78,90,10,12];
var oddnumbers = numbers.filter((number) => {
  return number % 2;
});
console.log(oddnumbers);

