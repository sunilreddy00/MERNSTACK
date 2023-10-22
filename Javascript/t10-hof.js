// Higher order functions (HOF's)

// printHello = () => console.log('Hello!!')
// setTimeout(printHello,3000)
// setInterval(printHello,8000)

/* function a(num1){
	function b(num2){
		x=5
		function C(num3){
			return 100*num1*num2*num3*x
		}
	}
}
out = a(1)
console.log(out)  */

// For Each

// let colors = ['yellow','tamoto','gray','red','green']
// colors.forEach((el) => console.log(el.toUpperCase()))

// let colors_upper=[]
// let y= colors.forEach((el) => colors_upper.push(el.toUpperCase()))

// console.log(colors_upper)
// console.log(y) 

// MAP

// let num1 =[1,2,3,4,5,6]
// let sqr_num1 = num1.map((el) => el*el)

// console.log(num1)
// console.log(sqr_num1)

// Filter

// let colors = ['yellow','tamoto','gray','red','green']
// let filteredcolors = colors.filter((el) => el.includes('a'))

// console.log('original',colors)
// console.log('modified',filteredcolors)

// Reduce

// let num1 =[1,2,3,4,5,6,7,8,9]
// let out = num1.reduce((init,el)=>init+el,100)

// console.log(num1)
// console.log(out)

//  Every

// let people = [19,22,28,18,19,22]

// let allpeopleArevoters = people.every(el=>el>=18)
// console.log(allpeopleArevoters)

// Some

// let people = [19,12,28,18,19,22]

// let allpeopleArevoters = people.some(el=>el>=18)
// console.log(allpeopleArevoters)


let num =['red','green','blue','orange','pink']
num.forEach((el)=>console.log(el.toUpperCase()))
let out2=[]
let out1 =num.forEach((el)=>out2.push(el.toUpperCase()))

console.log(out1)
console.log(out2)








