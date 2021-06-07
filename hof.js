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

function every(array, predicate) {
  for(let i = 0; i<array.length ; i++){
   
       if(!predicate(array[i])) return false;   
  }
   return true;
}
function every2(array,predicate){
  return !array.some( n => predicate(n))
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

function speak(line) {
  console.log(this);
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");

                  speak.call(hungryRabbit, "Burp!");
// → The hungry rabbit says 'Burp!'
function normalize() {
  console.log(this)
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});