// function checkBalance(){
//     function exec(){
//     	console.log("Money")
//     	console.log("Thank you")
//     }
//      console.log("Checking ur balance")
//     exec()
// }

// console.log("Enter the amount you want")
// setTimeout(checkBalance,3000)

//callback
//Promise
//async / Await

// console.log("Enter the amount")

// console.log("Some Action")

// let promise = new Promise((resolve,reject) =>
// {
// 	setTimeout(()=>resolve(console.log("Pls wait.....")),3000)
// })

// promise
//       .then(()=>console.log("Some Actions"))







// async function asyncFunc(){
// 	await promise
// 	console.log("Some Actions")
// 	console.log("Some Actions2")
// 	console.log("Some Actions3")
// 	console.log("Some Actions4")
// 	console.log("Some Actions5")
// }     

// console.log("Enter the amount you want")
// asyncFunc()


let promise = new Promise((resolve,reject) =>
{
	resolve(console.log("Hello"))
})

promise .then(()=>console.log("Some Actions"))