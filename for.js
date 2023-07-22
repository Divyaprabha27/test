// 1. for the given json iterate over all for loops (for for in for of foreach)

//a. for loop
//---------------------

var numbers = [1,2,3,4,5,6,7,8];
for(var i = 0; i< numbers.length; i++) {
    console.log (`Index:${i}; value: ${numbers[i]}`)
}

//b. for in loop
//---------------------

var UserDetails = {
    Name:"Disha",
    City:"Erode",
    Mob:"9567281234",
    Blood:"o +ve"
  };
  for (var i in UserDetails) {
    console.log(i);
  }

//c. for of loop
//------------------------

var numbers = [2,3,4,6,8,12,20];
for(var value of numbers) {
  console.log(value);
}

// d. for each loop
//----------------------------

let arr = [1,2,3,5,4,8];
  arr.forEach((value) => {
    console.log(value * 10);
})
