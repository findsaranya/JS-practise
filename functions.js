"use strict";

// Write a function min that takes two arguments and returns their minimum.

function min( num1, num2){
    if(num1 < num2){
        return num1;
    }
     return num2;

}
console.log("Min",min(0,-10))
console.log("Min",min(0,10))

function power(base, exponent = 2) {
if(!exponent) return 1;
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4,2));

function countBs(str){
    let count = 0;
    for(let pos=0 ; pos < str.length ; pos++){
        if (str[pos] == 'B'){
            count ++;
        }
    }
    return count;
}
function countChar(str,letterTomatch){
    let count = 0;
     for(let pos=0 ; pos < str.length ; pos++){
        if (str[pos] == letterTomatch){
            count ++;
        }
    }
    return count;
}
console.log("countBBs",countBs("BBC"));
console.log("countchar",countChar("kakkerlak", "k"));

// array methods and objects
/*
indexof()
lastIndexof()
includes()
push - add last ele
pop - remove last ele
unshift- add frist ele
shift - remove first element

*/


function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));