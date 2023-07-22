//a. Print odd numbers in an array

var numbers = [1,2,3,4,5,6,7,8,9,10];
(function(){
    for(var i=0; i<numbers.length; i++) {
        if(numbers[i]%2!==0) {
         console.log(numbers[i]);
        }
    }
})();

//b. Convert all the strings to title caps in a string array

var title = "welcome to the world";
(function() {
  const result = title.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  console.log(result);
})();
// c. Sum of all numbers in an array

var numbers = [22, 45, 21, 65, 3]; 
var sum = 0;
(function() {
    for (var i=0; i < numbers.length; i++) 
    sum = sum + numbers[i];
    {
    console.log(sum)
    }
})();

//d. Return all the prime numbers in an array

var numbers = [11,12,13,14,15,16,17,18,19,10];
(function() {
  const filterdvalues = numbers.filter((num) => {
    for(let i = 2; i<num; i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
  console.log(filterdvalues);
})();

//e. Return all the palindromes in an array

var names = ["malayalam","apple","banana","level","ada"];
(function() {
    const result = names.filter(function(returnValues)  {
        return returnValues === returnValues.split('').reverse().join('');
    });
    console.log(result);
})();

//f. Return median of two sorted arrays of the same size.



// g. Remove duplicates from an array

var numbers = [17,27,11,27,20,12,12,32,10,20];
(function() {
  var result = numbers.filter((value,index) => {
    if(numbers.indexOf(value)===index) {
      return value;
    }
  })
  console.log(result);
})();

//h. Rotate an array by k times

var nums = [1,2,3,4,5,6,7,8];
var k = 2;
(function() {
  const rotate = function(nums,k) {
    for(let i =0; i< k; i++) {
      let temp = nums[0];
      for (let j = 0; j < nums.length; j++) {
        nums[j] = nums[j+1];
      }
      nums[nums.length-1] = temp
    }
    return nums;
  };
  console.log(rotate(nums,k));
})();