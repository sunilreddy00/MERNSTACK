/*
let string1 = "Hello";
let string2 = "World";

let newString = string1.concat(" ",string2);
console.log(newString);
*/

let array1 = [1,2,3,4,5,];
let array2= [6,7,8,9,]

let newarray = array1.concat(array2);
console.log(newarray);
 
let evenNumbers = newarray.filter(newarray => newarray % 2 === 0);
let sumOfEvenNumbers = evenNumbers.reduce((initial, element) => initial + element,100);

console.log(sumOfEvenNumbers);

