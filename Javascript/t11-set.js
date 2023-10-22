  // set

// let x = [1,2,3,4,5,6,7,8,9]

// let set_x = new Set (x)
// console.log(x)

// set_x.add(25)
// set_x.delete(1)
// set_x.has(33)


// console.log(set_x)

/*  intersection  */

// let team_a = new Set(['ind','pak','aus','nz','uk','lon'])
// let team_b = new Set(['ind','america','africa','china','uk','london'])

// let team = new Set([...team_a,...team_b])

// console.log(team)

// let TeamA = new Set(team_a)
// let TeamB = new Set(team_b)

// let a_intersection_b = team_a.filter(el=>team_B.has(el))
// console.log(a_intersection_b)

// Map

// let states = [
// ["assam","dispur"],
// ["meghalaya","shilong"],
// ["sikkim","gangtok"],
// ]
// st = new Map(states)
// console.log(st)

// structuring and destructuring

// let x = [1,2,3,4]

// let [one,two,three,four] = x
// console.log(one)
// console.log(two)
// console.log(x)
// console.log(...x)

// let colors = [
// ['red','green','blue','yellow','pink'],
// ['apple','orange','banana','grapes']
// ]
// let [color,fruits] = colors
// console.log(color,fruits)

// let virat_profile = {
// 	first_name:' virat',
// 	last_name: 'kholi',
// 	age: 31
// }
// let {first_name:fn,last_name:ln,age} = virat_profile
// console.log(fn,ln,age)


let team_a =new Set(['ind','aus','jap','chn'])

let team_b = new Set(['uk','usa','can','chl','ind','jap'])

// let team_union = new Set([...team_a,...team_b])

let a_intersection_b = team_a.filter(el => team_b.has(el))

console.log(a_intersection_b)