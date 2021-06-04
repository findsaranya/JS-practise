"use strict";
function range(start, end, step=1 ){
    let result = [];
    for(let init = start ; start > end ? init >= end :init <= end; init+=step){
        result.push(init);
    }
    return result;
}
function sum (numbers){
  let sum = 0;
  for ( let num of numbers){
      sum += num
  }
  return sum;

}
console.log("range function arr",range(5,2,-1));
console.log("range function",sum(range(5,2,-1)));

// reverse an array

//const reverseArray = arr => arr.reverse();
const reverseArray = arr => {
       let reversedArray = [];
       for(let rev = arr.length ; rev >= arr.length ; rev--){
           reversedArray.push(arr[rev]);
       }
  return reversedArray;
}
function reverseArrayInPlace(array) {
for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
console.log("reverse",reverseArray(["A", "B", "C"]));
let arrValue=[1,2,3];
console.log("reversedArrayInplace",reverseArrayInPlace(arrValue));
console.log(arrValue);

function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
    //console.log(list);
  }
  return list;
}
console.log(arrayToList([10, 20]));

function listToArray(list) {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
console.log(listToArray(arrayToList([10, 20, 30])));
