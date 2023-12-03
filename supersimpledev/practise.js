/*
function fetchData(callback){
  setTimeout(function(){
    callback("Data fetched succesfully");
  }, 2000);
}

fetchData(function(result){
  console.log(result);
}) 

*/
/*
console.log("Enter the amount you want");
setTimeout(()=>"pls wait .....",3000)
console.log("Some actions")
*/

// function fetchData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(function(){
//       resolve("Data fetched successfully!");
//     },2000);
//   });
// }

// fetchData().then(result=>{
//   console.log(result)
// })

// function checkBalance(){
//   function exec(){
//     console.log("Money")
//     console.log("Thank you")
//   }
//    console.log("Checking ur balance")
//    exec()
// }

// console.log("Enter the amount you want")
// setTimeout(checkBalance,3000)


// let promise = new Promise((resolve,reject) =>
// {
// 	resolve(console.log("Hello"))
// })

// promise .then(()=>console.log("Some Actions"))

// console.log("Enter the amount")
// console.log("Some Action")
// let promise = new Promise((resolve,reject) =>
// {
// 	setTimeout(()=>reject(console.log("Pls wait.....")),3000)
// })

// promise
//       .then(()=>console.log("Some Actions")).catch((err)=>console.log(err))


// console.log("Enter some amount");
// console.log("some Actions");
// let promise = new Promise((resolve,reject) =>
// {
// 	setTimeout(()=>reject(console.log("Pls wait.....")),3000)
// })

// promise.then(()=>console.log("Some Action....")).catch((err)=>console.log(err))

// console.log("welcome!!!!")
// let promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>resolve(console.log("Hello World!!!")),3000)
// })
// promise.then(()=>console.log("Hello"));


// function fetchData(callback){
//   setTimeout(function() {
//     const data = "Data fetched successfully!";
//     callback(null,data);
// },3000);
// }
// function processData(error,data){
//   if(error){
//     console.log(error)
//   }
//   else{
//     console.log(data)
//   }
// }
// fetchData(processData);


// function fetchData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(function(){
//      let data = "Data fetched succesfully!!!"
//      reject(data); 
//     },3000)
//   });
// };
// fetchData()
// .then(data=>{console.log(data);
// })
// .catch(error=>{console.log(error);
// })


// function fetchData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(function(){
//       let data = "Data fetched succesfully!!"
//       resolve(data);
//     },3000)
//   })
// }
// async function getData(){
//   try{
//     let data = await fetchData();
//     console.log(data);
//   }catch(error){
//     console.log(error);
//   }
// }
// getData()

// console.log("Start");

// setTimeout(function() {
//     console.log("Async operation completed after 2 seconds");
// }, 2000);

// console.log("End");


// function add(1,2){
//   return 1+2;
// }
// add()

// const add = (1+2) => a+b;
// console.log(add())

// function RegularFunction (){
//   this.value = 10;
//   setTimeout(function(){
//     this.value++;
//     console.log(this.value);
//   },2000);
// }
// RegularFunction();

// function RegularFunction(){
//   this.value = 10;
//   setTimeout(()=>{
//     this.value++;
//     console.log(this.value);
//   },2000);
// }
// RegularFunction();
// RegularFunction();
// RegularFunction();


// function RegularFunction(){
//   this.value=10;
//   setTimeout(function(){
//     this.value++
//     console.log(this.value++)
//   },2000)
// };
// RegularFunction();

// function RegularFunction(num){
//   num+1
//   setTimeout(()=>{
//     num+1
//     console.log(num+1);
//   },3000);
// }
// RegularFunction(76);

// class vehicle {
//   constructor(wheels){
//     this.wheels = wheels
//   }
// }
// class car extends vehicle{
//   constructor(airbags){
//     this.airbags = airbags
//   }
// }
// let v1 = new car(8);
// console.log(v1.wheels);


// class car{
//   constructor(brand){
//     this.carname = brand;
//   }
//     get cnam(){
//     return this.carname;
//   }
//   set cnam(){
//     this.carname = x;
//   }
// }
// let mycar = new car ("Ford");
// console.log(mycar);

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.speak = function() {
//   console.log(`${this.name} makes a sound.`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.bark = function() {
//   console.log(`${this.name} barks loudly!`);
// };

// var myDog = new Dog('Buddy', 'Golden Retriever');

// myDog.speak();
// myDog.bark();  

let parent = {
  car: "Toyoto",
  showcar: function(){
    console.log(`Parent's car: ${this.car}`);
  }
};
let child = Object.create(parent);
child.car = "Tesla";

child.showcar();
parent.showcar();
