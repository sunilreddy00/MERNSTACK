// Error handling


// let x = 100
// let out = x/5

// console.log(out)

// let out = "ABCD"
// let x = 100
// try{
// 	let out = x.toUpperCase()
// }
// catch(err){
// console.log(out,x)
// }


// let out = 'ABCD'
// let x = 100
// try{
// 	let out = x.toUpperCase()
// 	console.log("Yes it is successull")
// }
// catch(err){
// 	console.log("no it not")
// }
// finally{
// 	console.log("In both case i will be executed!")
// }

// let name = ""
 
//  if (name == "") throw "enter a valid input"

//  	try{
//  	 name = name.toUpperCase()
//  		console.log(name)
//  	}
//  	catch(err){
//  		console.log(err)
//  	}

// let first_name = "123"
// let last_name = "Khan"

// try{
// 	first_name=first_name.toUpperCase()
// 	console.log(first_name+last_name)
	
// }
// catch(err){
// 	console.log("Your input is not valid, try to give better input next time")
// }

// // Classes

// person =  "sunil"
// person.takehimtosomewhere('Mumbai')

class PersonProfile{
	constructor(fn,ln,age,city){
		this.first_name = fn
		this.last_name = ln
		this.age = age
		this.city = city
		this.country = "India"
	}

 getDetails(){
	console.log(`${this.first_name} ${this.last_name} is ${this.age} years old, he lives in ${this.city}`)
 }
    static blueprintDetails(){
	console.log("Here is the class Details")
 }
}


sachin_profile = new PersonProfile ("Sachin","Tendulkar","40","Mumbai")
Virat_profile = new PersonProfile ("Virat","Kholi","31","Banglore")

PersonProfile.blueprintDetails()