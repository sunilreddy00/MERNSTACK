// objects

/* let virat_profile = {
	first_name:'virat',
	last_name:'kohli',
	age : 32,
	skill:['batting','bowling','fielding'],
	team:'India',
	full_name:function (){
		return this.first_name+ this.last_name
	}
}
console.log(virat_profile)
console.log(virat_profile.age)
console.log(virat_profile.team)
console.log(virat_profile.full_name)

virat_profile.height = '5.8'
console.log(virat_profile) */

// console.log(objects.key(virat_profile))
//  console.log(objects.values(virat_profile))
//  console.log(objects.entries(virat_profile))

// let x = 10
// let y = x

// x= 200
// console.log(x,y)

// let skills = ['reading','dancing','playing']
// let copyskills= [...skills]

// skills.push('singing')
// skills.push('editing','acting')
// console.log(skills)
// console.log(copyskills)

// let skills = ['reading','dancing','playing']
// let copyskills= skills

// skills.push('singing')
// skills.push('editing','acting')
// console.log(skills)
// console.log(copyskills)

// let x = [2,3,3,4,5,6,7,]
// let y = [...x]

// x.push(90,89,99)
// console.log(x)
// console.log(y)

// let x = [23]
// let y = x

// x.push('200')
// console.log(x)
// console.log(y)

// function dosomething (a) {
// 	a()
// }

// function printHello(){
// 	console.log('hello world!!')
// }
// dosomething(printHello)

// console.log(printHello)

let x = 200
function printHello (){
	x= 500
	return 10
}
function dosomething(a){
	a()
	// console.log(a)
	console.log(x)
}
dosomething(printHello)


// function dosomething(){
// 	return function(){console.log('Hello world!!!')}
// }
// dosomething()()