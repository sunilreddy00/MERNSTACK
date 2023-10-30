/*let promise1 = Promise.resolve(10)
let promise2 = 45
let promise3 = new Promise((resolve,reject) =>
               setTimeout(resolve,5000,"HEllo")
)
Promise.race([promise1,promise2,promise3]).then((out)=>
console.log(out)).catch((err)=>console.log(err))  */



/* let Person = {
    fname:"Sachin",
    lname:"Tendulkar",
    full_name:function(){
        return this.fname + '' + this.lname 
    }
}
let out = Person.full_name()
console.log(out)    */

/* let Person = {
    full_name: function(age,team){
        return this.fname + '' + this.lname + 'age:' + age + 'team:' + team
    }
}
let Person1={
    fname:"sachin",
    lname:"Tendulkar"
}
let Person2={
    fname:"Virat",
    lname:"Kohli"
}

let out = Person.full_name.call(Person2,32,"Banglore")
console.log(out)  */

let Person = {
    fname:"Sachin",
    lname:"Tendulkar",
    full_name:function(){
        console.log(this.fname + '' + this.lname)
   }
}
let x = Person.full_name.bind(Person)

setTimeout(x,3000)