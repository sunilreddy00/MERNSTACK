    // var birth = prompt("Please input your Birth year")
    // var now = new Date()
    // var age = now.getYear() - birth + 1900

    // if(age<18)
    //     console.log('minor')
    // else if(age>=18 && age<36)
    //     console.log('youth')
    // else console.log('elder')


     //   fetch

    //  fetch('https://api.example.com/data')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse the JSON from the response
    // })
    // .then(data => {
    //     console.log(data); // Handle the data from the response
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });

    //     HOF

//     const numbers = [1, 2, 3, 4];
// const squaredNumbers = numbers.map(function(number) {
//     return number * number;
// });
// console.log(squaredNumbers)
/*
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10
const triple = multiplier(3);
console.log(triple(5)); // Outputs: 15
*/


// function <name> (){

// }

// function greet(name){
//     console.log("hello",name+"!")
// }
// greet("sunil");

// let greet =(name)=>{
//     console.log("Hello,"+name+"!")
// };
// greet("sunil");

// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     draw: function(age){
//         console.log('age');
//     }
//     };
// console.log(circle.drawdraw)
// console.log(circle.location)

// let viratProfile = {
//     firstname: "virat",
//     lastname: "kholi",
//     age: 35,
//     location :"Banglore",
//     Adress: {
//         permanentAdress:"delhi",
//         LocalAdress: "Banglore"
//     }
// };
// console.log(viratProfile.Adress)

// function createCircle(radius){
//    return{ 
//     radius,
//     draw : function(){
//         console.log('draw');
//     }
//    }
// }
// let circle = createCircle(2);
// circle.draw

// // constructor function
// function circle(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log('draw');
//     }
// }
// let another = new circle(1);

// value type
// let number = 10;

// function increase(number){
//     number++;
// }
// increase(number)
// console.log(number)

// reference type

// let number = {value:10};

// function increase(number){
//     number.value++;
// }
// increase(number)
// console.log(number)

// HOISTING
// name()
// function name(){
//     console.log("Hello World!!")
// };

// DOUBLE AND TRIPLE EQUALS
// console.log(1 == true)
// console.log(6 === "6")

// CLOSERS
// function square(){
//     let number = 5
//      function squaredNumbers(num){
//         console.log(number*num)
//      }
//      return squaredNumbers
// }
// let newnum = square();
// newnum(3)


// PRINT THE ALPHEBATES
// let array = []
// for (let i="A".charCodeAt(0);i<="J".charCodeAt(0);i++){
//      array.push(String.fromCharCode(i));
// }
// console.log(array)

// PRINT THE NUMBERS
// let array = []
// for (let i=0;i<=10;i++){
//     array.push(i)
// }
// console.log(array);

// let array1 = [1,2,3,4,5,6]
// let array2 = [7,8,9]
// let array = array1.concat(array2)
// console.log(array)

// let evennum = array.filter(array=>array%2==0)
// console.log(evennum)
// let rednum = evennum.reduce((initial,element) => initial+element);
// console.log(rednum);
// let reversednumber = parseInt(rednum.toString().split('').reverse().join(''));
// console.log(reversednumber)

// let num = 12345;
// let reversednumber = parseInt(num.toString().split('').reverse().join(''));
// console.log(num);
// console.log(reversednumber)


let firstNumber = parseInt(prompt("Enter the first number:"));
let secondNumber = parseInt(prompt("Enter the second number:"));

console.log("Odd numbers between " + firstNumber + " and " + secondNumber + " are:");
for (let i = firstNumber; i <= secondNumber; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
