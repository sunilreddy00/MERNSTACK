// for (let i=10; i<=20;i++){
// 	if (i<10) continue;
// 	console.log(`${i}`)
// 	out = i ** 2
// 	console.log(`The square ${i} is ${out}`)
// }


// let arr1=['India','Pak','Nz','Aus','Uk']
// for (let i=0; i<arr1.length;i++)
// 	console.log(i)


// function x (i){
// 	let num = i
// 	let out = i*i
// 	console.log(out)
// }
// x(100)


// function atm(){
// 	let amount = 3000
// 	console.log(`Balance in your account is ${amount}`)
// 	return 200
// }
// console.log(atm())

// function x (){
//   let name = "sunil"
//   console.log(`This is my name "${name}"`)
//   return 300
// }
// console.log(x())

// function atmMachine (){
// 	let amount = 3000
// 	console.log(`${amount} in my account`)
// 	return 100
// }
// console.log(atmMachine())


// palindrome function using array methods

let string = "race car"

function isPalindrome(str) {
    let string1 = str.replace("race car",'');
    let reversedStr = string1.split('').reverse().join('');
    return string1 === reversedStr;
}

console.log(isPalindrome("race car")); 










