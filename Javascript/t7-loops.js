// loops
   /* for loop */

// for (let i=0; i<10; i++){
// 	console.log(`the value of i is ${i}`)
// 	out = i ** 2
// 	console.log(`the square of ${i} is ${out}`)
// }

// let arr1=['India','Pak','Nz','Aus','Uk']
// for (let i=0; i<arr1.length ; i++)
// {
// 	if (i==2) continue;
// 	console.log(i)
// 	console.log(`Hello !!! ==> \t ${arr1[i]}`)
// }

    /* for of loop ---------> it shows the value of the elements */

//  let arr1=['India','Pak','Nz','Aus','Uk']
// for (let element of arr1)
// {
// 	console.log(`Hello !!! ==> \t ${element}`)
// 	if (element == `Aus`) continue;
// 	console.log(`its ok !!!!`)
// }

     /* for in loop ---------> it shows the index .no of the elements */

//  let arr1=['India','Pak','Nz','Aus','Uk']
// for (let element in arr1)
// {
// 	console.log(`Hello !!! ==> \t ${element}`)
// 	if (element == `Aus`) continue;
// 	console.log(`its ok !!!!`)
// }

//  let arr1=['India','Pak','Nz','Aus','Uk']
// for (let element of arr1)
// {
// 	console.log(`Hello !!! ==> \t ${element}`)
//  }
 


// for (let element in arr1)
// {
// 	console.log(`Hello !!! ==> \t ${element}`)
//  }

   /* while loop -----> when it is true or false do something */

   // let x =0
   // while(x==0){
   // 	console.log('Good Morning')
   // 	x=1
   // }

   // let y = 'ON'
   // let counter= '3'
   // while(counter)
   // {
   // 	console.log('Try Again!!!')
   // 	counter--
   // }

  // let y = 7
   // let counter= '10'
   // while(counter)
   // {
   // 	console.log('Good Morning!!!')
   // 	counter--
   // } 

    /* do while */

 
// let x="ON"
// let countries=['India','Pak','Nz','Aus','Uk']
//   while(countries.length)
//    {
//    	console.log(countries)
//    	countries.pop()
//    }

// let x="ON"
// let countries=['India','Pak','Nz','Aus','Uk']
//    do{
//    	console.log(countries)
//    	countries.pop()
//    } while(countries.length)


   /*  Functions ----> it is a resuable block of code */

let str1=['India','Pak','Nz','Aus','Uk']
   function coffeeMachine(str1)
   {
   	for(let element in str1)
   	{
   		console.log(`${str1[element]} is at position ${element}`)
   	}
 }

data=['India','Pak','Nz','Aus','Uk']
coffeeMachine(data)
// coffeeMachine("data")
// coffeeMachine(12,45,67,9898,9876654)