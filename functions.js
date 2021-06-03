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

