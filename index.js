'use strict';

// printing a pattern
/*
#
##
###
####
#####
######
#######

*/

let numberOfLines = prompt("Enter Number of lines",1);
 let pattern = "";
for(let row = 1;row <= Number(numberOfLines) ; row++){
    
     for(let col = 1;col <= row;col++){
        pattern += " # ";

     }
     pattern+="\n";

}
console.log(pattern);

// print FizzBuzz 
let str = '';
for(let num = 1 ; num <= 100 ; num++){

    if( num % 3 == 0){
        str += `Fizz \n`;
    }else if( num % 5 == 0){
        str += `Buzz \n`;
    }else if( (num % 3 == 0) && (num % 5 == 0) ){
        str += `FizzBuzz\n`;
    }else{
        str += `${num} \n`;
    }

}
console.log(str);

// pattern generation chess board
/*
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/

let gridSize = 8;

 let temp = '';
for (let gridRow = 1 ; gridRow <= gridSize ; gridRow++ ){
    let chessPattern ='';
    for(let gridCol = 1 ; gridCol <= gridSize ; gridCol++){
         chessPattern += " # ";
             
    }
    //  console.log(gridRow);
    temp += gridRow % 2 == 0 ? `${chessPattern}\n` : ` ${chessPattern}\n` ;
    //console.log(chessPattern);
}
console.log(temp);


function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

function factorial(number) {
  if (number == 1) {
    return 1;
  } else {
    return number * factorial(number -1);
  }
}
console.log("factorial",factorial(3))