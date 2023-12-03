// Closures
/*
function outer(){
  let message = "Hello,";
  function inner(name){
    console.log(message + name)
  }
  return inner;
}
let final = outer();
final("sunil");
final("Bhargav");
*/
/*
function square(){
  let number = 2;
  function squaredNumbers(num){
    console.log(number * num)
  }
  return squaredNumbers;
}
let new_number = square()
new_number(2)
new_number(7)
*/
/*   SUM OF EVEN NUMBERS
let array1 = [1,2,3,4,5,6];
let array2 = [7,8,9];
let new_array = array1.concat(array2);
console.log(new_array);

let even_num = new_array.filter(new_array =>new_array %2 === 0);
console.log(even_num)
let someofevenNumbers = even_num.reduce((initial,element) =>initial+element);
console.log(someofevenNumbers)
*/

// let array = [];
// let A = 65;
// let Z = 90;

// for (let i = A; i <= Z; i++) {
//     array.push(String.fromCharCode(i));
// }
// console.log(array);

let array = [];

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    array.push(String.fromCharCode(i));
}
console.log(array);


// let array = [];
// for (let charCode = 65; charCode <= 74; charCode++) {
// 		array.push(String.fromCharCode(charCode));
// }
// let string = array.join(' ');
// prompt("Characters from A to J:", string);

// let charArray = [];
// for (let char = 'A'; char <= 'J'; char = String.fromCharCode(char.charCodeAt(0) + 1)) {
// 		charArray.push(char);
// }
// let charString = charArray.join(' ');
// prompt("Characters from A to J:", charString);







