// let name = 10;
// console.log(name);

// const x = 5;
// x = 10;
// console.log(x);

// let result 
// result = "hello" - "world"
// console.llog(result)


// let x = 10;
// let y = 20;

// if (x>5){
//   console.log('x is greater than 5')

//   if (y>10){
//     console.log('y is greater than 10')
//   }else {
//     console.log('y is not greater')
//   }
// }else{
//   console.log('x is not greater than 5')
// }

// write a program to calculate the sum of positive number and if it is negative skip it
// immedietly invoking functions 
// (function(){
//   console.log("This is a self invoking function")
// })();


// ------program to print 1-n stop and continue from their

// function printNumbersWithStopAndContinue(n) {
//   for (let i = 1-n ; i < n; i++) {
//     if (i >= 5) {
//       console.log("Stopping at", i);
//       break; 
//     }
//     if (i === 3) {
//       console.log("Skipping", i);
//       continue; 
//     }
//     console.log(i);
//   }
// }
// printNumbersWithStopAndContinue(8);

// rotate a string 

// function rotateString(str, rotationCount) {
//   let len = str.length;

//   rotationCount = rotationCount % len;

//   if (rotationCount < 0) {
//     rotationCount = len + rotationCount;
//   }
//   let rotatedStr = str.slice(rotationCount) + str.slice(0, rotationCount);
//   return rotatedStr;
// }
// let originalString = "Hello, World!";
// let rotatedString = rotateString(originalString, 3);
// console.log(rotatedString); 


// fetch the ip adress from server 

let Url = 'https://api.ipify.org?format=json';
fetch(Url)
  .then(response => response.json())
  .then(data => {
    let ipAddress = data.ip;
    console.log('Your IP address is:', ipAddress);
  })
  .catch(error => console.error('Error fetching IP address:', error));






