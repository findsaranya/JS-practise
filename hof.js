"use strict";
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
function unless(test, then) {
  if (!test) then();
}
function greaterThan(n) {
  return m => m > n;
}
console.log(greaterThan(10)(11));



// reduce an array into faltten array
function flattenArray(arr){
  let flattend =    arr.reduce( (acc,currentValue) => {
          //console.log(curre)
         return acc.concat(currentValue,[]);
      });
      return flattend;
}

 console.log(flattenArray([[1,2],[2,3]]));

//  own for loop

function ownLoop (start,test,update,body){
    for(let value = start ; test(value);value = update(value)){
        body(value);
    }
}
ownLoop(3, n => n > 0, n => n - 1, console.log);

function every(array, test) {
  for(let i = 0; i<array.length ; i++){
       if(test(array[i])) return true;

       return false;
  }
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));